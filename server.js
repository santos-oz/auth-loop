import express from "express";
import jwt from "jsonwebtoken";
import usuario from "./usuario.js";


const app = express();
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

app.use(express.json())