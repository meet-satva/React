import express from "express";
import cors from "cors";
import connection from "./config/db.js";
import router from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

connection();

app.use("/api", router);

app.listen("3000", () => {  
    console.log("App is listing on the port: 3000");
});