import { Request, Response, Express } from "express";
import express from 'express';
import cors from 'cors';
import mongoClient from "./Database/mongoClient";

const app: Express = express();
const PORT: Number = 3000;
const Root: "/" = "/";
let con: number = 0;
let connections: any = [];


const allowlist = ['http://localhost:19006'];
// const allowlist = ['http://localhost:19006', 'http://localhost:8081'];
var corsOptionsDelegate = function (req: any, callback: any) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}


var corsOptions = {
    origin: 'http://localhost:19006',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


// Route.
app.get(Root, async (req: Request, res: Response) => {
    await mongoClient.connect();
    await mongoClient.db("closet-items").command({ ping: 1 });
    const collection = mongoClient.db('peacedrobe').collection('closet-items');
    const result = await collection.insertOne({
        name: "Lovely Loft",
        summary: "A charming loft in Paris",
        bedrooms: 1,
        bathrooms: 1
    });

    console.log(`New listing created with the following id: ${result.insertedId}`);
})

app.get("/data", cors(corsOptions),  (req: Request, res: Response) => {
    console.log('backend was hit properly');
    console.log(req.get('Referrer'));
    res.json({
        data: 'success',
        Type: true,
    });
})



let Server = app.listen(PORT, () => {

    console.log("port is running on the " + PORT);
});








// Handle the connection.
Server.on("connection", (connection: any) => {
    connections.push(connection);

    connection.on("close", function () {
        connections = connections.filter((cur: any) => {
            cur !== connection
        })
    })
})

// Close the Connection.
connections.forEach((curr: any) => {
    curr.close();
});


module.exports = { app, Server }
