import { Logo } from "@/stories/components/Logo/Logo";
import { redirect } from "next/navigation";

export default async function Join() {
    const addUser = async (formData: FormData) => {
        "use server";

        const username = formData.get("username");
        const roomcode = formData.get("roomcode");

        redirect(`/wait/${roomcode}?username=${username}`);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="absolute top-0 right-0 p-4">
                <Logo>Dilemma</Logo>
            </div>
            <div>
                <form action={addUser} className="flex flex-col gap-4">
                    <input
                        name="username"
                        type="text"
                        placeholder="Enter name"
                        className="p-4 rounded shadow bg-neutral-100 text-lg uppercase"
                    />
                    <input
                        name="roomcode"
                        type="text"
                        placeholder="Enter room code"
                        className="p-4 rounded shadow bg-neutral-100 text-lg uppercase"
                    />
                    <button
                        type="submit"
                        className="p-4 rounded shadow bg-primary-500 text-lg uppercase"
                    >
                        Join
                    </button>
                </form>
            </div>
        </main>
    );
}
