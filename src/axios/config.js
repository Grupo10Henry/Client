import axios from "axios"
import dotenv from "dotenv"

dotenv.config();



export const instance = axios.create({
  baseURL: process.env.SERVER_URL, })
