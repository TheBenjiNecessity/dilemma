"use client";

import { setItem } from "@/services/localStorage.service";
import socketClient from "@/services/socket";
import { useEffect } from "react";

const RoomData = ({
    roomcode,
    username,
}: {
    roomcode: string;
    username: string;
}) => {
    useEffect(() => {
        const socket = socketClient(roomcode);
        setItem("dilemma-room", { roomcode, username });
        socket.emit("update-room", roomcode);
    }, [roomcode, username]);

    return null;
};

export default RoomData;
