import { PORT } from "@/config/app";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Server as IOServer } from "socket.io";
import { Server } from "socket.io";

export const config = {
    api: {
        bodyParser: false,
    },
};

interface SocketServer extends HTTPServer {
    io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
    server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO;
}

export default function SocketHandler(
    _req: NextApiRequest,
    res: NextApiResponseWithSocket
) {
    if (res.socket.server.io) {
        console.log("Server - Socket is already running");
        res.status(200).json({
            success: true,
            message: "Socket is already running",
            socket: `:${PORT + 1}`,
        });
        return;
    }

    console.log("Server - Starting Socket.IO server on port:", PORT + 1);

    const io = new Server({
        path: "/api/socket",
        addTrailingSlash: false,
        cors: { origin: "*" },
    }).listen(PORT + 1);

    io.on("connect", (socket) => {
        const _socket = socket;

        console.log("Server - socket connect", socket.id);
        _socket.broadcast.emit("welcome", `Welcome ${_socket.id}`);

        socket.on("disconnect", async () => {
            console.log("Server - socket disconnect");
        });

        socket.on("message", (item) => {
            console.log(
                "Server - send message to room" + item.room,
                item.message
            );
            socket.to(item.room).emit("message", item.message);
        });

        socket.on("connection-start", (item) => {
            console.log("Server - emit connection-start", item);
            socket.join(item.room);
        });
    });

    res.socket.server.io = io;
    res.status(201).json({
        success: true,
        message: "Socket is started",
        socket: `:${PORT + 1}`,
    });
}
