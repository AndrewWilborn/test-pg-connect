import { db } from "./dbConnect.js"

export async function getAllCustomers(req, res) {
  await db.connect()
  const result = await db.query('SELECT * FROM customers')
  db.end()
  res.send(result.rows)
}

// note that concating strings directly is unsafe