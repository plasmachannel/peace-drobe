
import axios from "axios";


export async function getExpressTestInfo() {
  const x = await axios.get('http://localhost:3000/data');
  console.log({x});
}