import SocketUserList from "@/components/SocketUserList";
import { Logo } from "@/stories/components/Logo/Logo";
import Link from "next/link";

export default async function Host({
    params: { roomcode },
}: {
    params: { roomcode: string };
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="absolute top-0 left-0 p-4">
                <div className="p-4 rounded shadow bg-neutral-100 text-lg uppercase">
                    {roomcode}
                </div>
            </div>
            <div className="absolute top-0 right-0 p-4">
                <Logo>Dilemma</Logo>
            </div>
            <div>
                <SocketUserList roomcode={roomcode} />
            </div>
            <Link
                href={`/host/${roomcode}/game`}
                className="p-4 rounded shadow bg-primary-500 text-lg uppercase"
            >
                Start Game
            </Link>
        </main>
    );
}
