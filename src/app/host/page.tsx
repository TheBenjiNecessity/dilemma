import { createRoom } from "@/services/roomApi.service";
import { Logo } from "@/stories/components/Logo/Logo";
import { UserList } from "@/stories/components/UserList/UserList";
import { redirect } from "next/navigation";

export default async function Host() {
    await createRoom().then((room) => redirect(`/host/${room.roomcode}`));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="absolute top-0 left-0 p-4">
                <div className="p-4 rounded shadow bg-neutral-100 text-lg uppercase"></div>
            </div>
            <div className="absolute top-0 right-0 p-4">
                <Logo>Dilemma</Logo>
            </div>
            <div>
                <UserList users={[]} />
            </div>
        </main>
    );
}
