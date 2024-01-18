import {MongoClient, ServerApiVersion} from "mongodb";

const url = 'mongodb://localhost:27017/peacedrobe';
const client = new MongoClient(url,  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }
);

export default client;