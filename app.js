//import express
import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { dbConnect } from "./Database/dbConnect.js";
import AuthRoutes from "./Routes/AuthRoutes.js";
import { auth } from "./middleware/auth.js";
import { authorize } from "./middleware/authorize.js";
import productRoute from "./Routes/productRoutes.js";
import categoryRouter from "./Routes/categoryRoutes.js"

const App = express()
config({path: "./config/config.env"})

dbConnect()

App.use(express.json())
App.use(bodyParser.urlencoded())
App.use("/api/auth", AuthRoutes)
App.use('/api/categories', auth, authorize("Admin"), categoryRouter)
App.use('/api/products', productRoute)

export default App;