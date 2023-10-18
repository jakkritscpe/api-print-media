import { Request , Response, NextFunction} from "express"
import { PrismaClient } from "@prisma/client"

var express = require("express");
var cors = require("cors");
var app = express();

const prisma = new PrismaClient();

app.get("/api/users", async (req:Request, res:Response, next: NextFunction) => {
    const allUsers = await prisma.user.findMany()
    res.json({
        users: allUsers
    })
})

app.listen(5000, () => {
    console.log("Example app listening on port 5000!")
});