"use client";

import socketClient from "@/services/socket";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const SocketButton = ({ room }: { room: string }) => {
    const [input, setInput] = useState("");
    const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

    useEffect(() => {
        socket.current = socketClient(room);
    }, [room]);

    const sendMessage = () => {
        // Send the message to the server
        console.log("emit message: " + input, socket.current);
        socket.current?.emit("message", { message: input, room });
    };

    return (
        <div>
            <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button type="button" onClick={sendMessage}>
                Submit
            </button>
        </div>
    );
};

export default SocketButton;
