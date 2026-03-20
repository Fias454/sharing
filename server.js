const express = require("express");
const session = require("express-session");
const cors = require("cors");
const http = require("http");
const {Server} = require("socket.io");
const path = require("path");
const port = 5000;
//
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:"*",methods:["GET", "POST"]
    }
})

//
const corsMidWare = cors({
    origin:"*",methods:["GET", "POST"]
})
const sessionMidWare = session({
    secret:"wowSecretShit",
    saveUninitialized:false,
    resave:false
})
//
app.use(corsMidWare);
app.use(sessionMidWare);
app.use(express.json());
io.use((socket, next)=>{
    sessionMidWare(socket.request, {}, next);
})
//
const upload =require("./Modules/upload");
const nest = require("./Modules/nest");
const download = require("./Modules/download");
const check = require("./Modules/check");
const login = require("./Modules/login");

//
app.use("/upload", upload);
app.use("/main", nest);
app.use("/download", download);
app.use("/user", check);
app.use("/user", login);

//
app.use("/uploads", express.static(path.join(__dirname, "./uploads/")));
app.use("/", express.static(path.join(__dirname, "./dist/")));
//
server.listen(port, ()=>console.log(`http://localhost:${port}`))