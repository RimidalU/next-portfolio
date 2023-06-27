import { Button } from "@/components/button/Button";
import Link from "next/link";

export default function Login() {
	return (
			<section className="flex flex-col flex-1 gap-5 h-full">
				<h1 className="title-text">Remind me who you are...</h1>
				<Button text="Login with Google" variant='loginGoogle'></Button>
				<h3 className="">
					If you have already registered in the system, you will log in with your account.
				</h3>
				<Link href={"/dashboard/register"}>
					<span className="">register here</span>
				</Link>
			</section>
	);
}
