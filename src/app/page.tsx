import { Button } from "@/stories/components/Button/Button";
import Navbar from "@/stories/components/Navbar/Navbar";
import { redirect } from "next/navigation";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface FormButtonProps
    extends DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {
    topMargin?: boolean;
    url: string;
}

async function FormButton({ topMargin, url, children }: FormButtonProps) {
    const onButtonClick = async () => {
        "use server";
        redirect(`/${url}`);
    };

    return (
        <form className="w-full" action={onButtonClick}>
            <Button fullWidth className={topMargin ? "mt-2" : ""}>
                {children}
            </Button>
        </form>
    );
}

export default function Home() {
    return (
        <>
            <Navbar>
                <Navbar.Label centered>Dilemma</Navbar.Label>
                <Navbar.Expander />
                <Navbar.Button>
                    <GiHamburgerMenu />
                </Navbar.Button>
            </Navbar>
            <main className="flex min-h-screen flex-col items-center p-6 w-full">
                <div className="w-full md:w-[500px]">
                    <FormButton url="host">Host</FormButton>
                    <FormButton topMargin={true} url="join">
                        Join
                    </FormButton>
                </div>
            </main>
        </>
    );
}
