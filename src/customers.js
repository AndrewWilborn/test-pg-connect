import { client } from "./dbConnect.js"

export async function getAllCustomers(req, res) {

  const result = await client.query('SELECT * FROM customers')

  res.send(result.rows)
}

// note that concating strings directly is unsafe