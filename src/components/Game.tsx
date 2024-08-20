"use client";

import socketClient from "@/services/socket";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { User } from "@/models/user.model";
import { Room } from "@/models/room.model";

const Game = ({ roomcode, user }: { roomcode: string; user?: User }) => {
    const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();
    const [room, setRoom] = useState<Room>();

    useEffect(() => {
        socket.current = socketClient(roomcode);

        // Listen for incoming messages
        socket.current.on("room-update", (room) => {
            setRoom(room);
        });

        const socketVal = socket.current;
        return () => {
            console.log("off message");
            socketVal.off("room-update");
        };
    }, [roomcode]);

    if (!room) {
        return <div>Loading...</div>;
    }

    switch (room.state) {
        default:
            return <div>Game</div>;
    }
};

export default Game;
