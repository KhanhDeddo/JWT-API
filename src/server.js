/* eslint-disable no-console */
import express from "express"
import sequelize from "./configs/postgreSQL.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/v1/api/", (req, res) => {
  return res.status(200).json("JWT API")
});

app.get("/v1/api/status-db", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ status: "Database connected successfully" })
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ status: "Database connection failed", error: error.message })
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
