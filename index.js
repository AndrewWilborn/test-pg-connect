import express from "express"
import cors from "cors"
import { getAllCustomers } from "./src/customers.js";

const PORT = 3000;

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { // Test as you go
  res.send('hello')
})

app.get("/customers", getAllCustomers)


app.listen(PORT, () => console.log("Listening at port: ", PORT))