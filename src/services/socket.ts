import { PORT } from "@/config/app";
import { io } from "socket.io-client";

export default function socketClient(room: string) {
    const socket = io(`:${PORT + 1}`, {
        path: "/api/socket",
        addTrailingSlash: false,
    });

    socket.on("connect", () => {
        console.log("Connected");
        socket.emit("connection-start", { room });
    });

    socket.on("disconnect", () => {
        console.log("Disconnected");
    });

    socket.on("connect_error", async (err) => {
        console.log(`connect_error due to ${err.message}`);
        await fetch("/api/socket");
    });

    return socket;
}
