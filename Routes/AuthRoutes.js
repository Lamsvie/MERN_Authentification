//import express
import express from "express";
import { AddUser, login } from "../controllers/UserController.js";
import { upload } from "../middleware/fileupload.js";


const AuthRoutes = express.Router()

AuthRoutes.post('/register',upload.single('file'), AddUser)
AuthRoutes.post('/login', login)


export default AuthRoutes;