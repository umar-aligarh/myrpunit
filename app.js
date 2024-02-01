import express from "express";
import cors from "cors";
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json({
    limit:'10000kb',
}));
app.use(express.urlencoded(
    {extended: true,limit: "1000kb" }
));

//Router import 
import studentRouter from "./backend/src/routes/Student.router.js"

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.use("/",studentRouter);
app.use("/resultFetched",studentRouter);




export default app;
