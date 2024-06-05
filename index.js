const express = require("express");
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = socketio(server);
