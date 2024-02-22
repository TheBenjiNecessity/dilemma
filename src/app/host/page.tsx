import { Logo } from "@/stories/components/Logo/Logo";

export default async function Home() {
    // TODO send api call to get room code

    const room = await fetch("http://localhost:4000/rooms", {
        method: "POST",
    }).then((resp) => resp.json());

    return (
        <main className="p-24">
            <div className="absolute top-0 right-0 p-4">
                <Logo>Dilemma</Logo>
            </div>
        </main>
    );
}
