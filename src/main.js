import  express  from "express";
import projectRouter from "./controllers/project.controller.js";
import authRouter from "./controllers/auth.controller.js";
import cookieParser from 'cookie-parser'
import { connectDb } from "./config/database.js";
import cors from 'cors'

const app = express()
const port = 5000

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }))
app.use('/api/v1', projectRouter)
app.use('/api/v1', authRouter)
connectDb()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))