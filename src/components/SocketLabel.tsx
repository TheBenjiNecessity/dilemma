"use client";

import socketClient from "@/services/socket";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

const SocketLabel = ({ room }: { room: string }) => {
    const [message, setMessage] = useState("");
    const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

    useEffect(() => {
        socket.current = socketClient(room);
        const socketVal = socket.current;

        // Listen for incoming messages
        socketVal.on("message", (m) => {
            console.log("message: " + m);
            setMessage(m);
        });

        return () => {
            console.log("off message");
            socketVal.off("message");
        };
    }, [room]);

    return <div>{message}</div>;
};

export default SocketLabel;
