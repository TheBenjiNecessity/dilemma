import RoomData from "@/components/RoomData";
import SocketUserList from "@/components/SocketUserList";
import { addUser } from "@/services/roomApi.service";
import { Logo } from "@/stories/components/Logo/Logo";

export default async function Wait({
    params: { roomcode },
    searchParams: { username },
}: {
    params: { roomcode: string };
    searchParams: { username: string };
}) {
    const room = await addUser(roomcode, username);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="absolute top-0 left-0 p-4">
                <div className="p-4 rounded shadow bg-neutral-100 text-lg uppercase">
                    {room.roomcode}
                </div>
            </div>
            <div className="absolute top-0 right-0 p-4">
                <Logo>Dilemma</Logo>
            </div>
            <div>
                <SocketUserList roomcode={roomcode} />
            </div>
            <RoomData roomcode={roomcode} username={username} />
        </main>
    );
}
