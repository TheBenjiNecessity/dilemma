"use client";

import socketClient from "@/services/socket";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { User } from "@/models/user.model";
import { UserList } from "@/stories/components/UserList/UserList";
import { getRoom } from "@/services/roomApi.service";

const SocketUserList = ({ roomcode }: { roomcode: string }) => {
    const [users, setUsers] = useState<User[]>([]);
    const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

    useEffect(() => {
        socket.current = socketClient(roomcode);
        const socketVal = socket.current;

        socketVal.on("room-update", (room) => {
            const { users } = room || {};
            setUsers(users || []);
        });

        getRoom(roomcode).then((room) => {
            setUsers(room?.users || []);
        });

        return () => {
            socketVal.off("room-update");
        };
    }, [roomcode]);

    return <UserList users={users} />;
};

export default SocketUserList;
