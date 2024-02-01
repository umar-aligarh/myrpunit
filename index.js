import * as dotenv from "dotenv";
import express from 'express';
import path from 'path';
dotenv.config()

// Connecting Database with the app

import dbConnect from "./backend/src/db/index.js";
import app from "./app.js";

const port = process.env.PORT || 5000;


// app.post("/", async (req, res) => {
//     const { en, fac } = req.body;
//     console.log(en, fac);
//     enroll = en; // Semicolon added here to terminate the statement
//     faculty = fac; // Semicolon added here to terminate the statement
//     reqHTML(en, fac);
//     res.send("hello world");
// });

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "/frontend/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`Application is working on port ${port}`);
    })
}).catch((error)=>{
    console.log("MONGODB connection failed");
})



export default app


// Running the controller 
