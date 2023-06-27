import Link from "next/link";

import { LoginForm } from "@/components/loginForm/LoginForm";
import { ButtonGoogle } from "@/components/buttonGoogle/ButtonGoogle";

export default function Login() {
	return (
		<section className="flex flex-col flex-1 gap-5 h-full">
			<h1 className="title-text">Remind me who you are...</h1>
			<h3 className="text-lg italic">
				If you have already registered in the system, you will log in with your account.
			</h3>
			<div className="w-full max-w-xs self-center">
				<LoginForm />
			</div>
			<ButtonGoogle/>
			<h3>If you have already registered in the system, you will log in with your account.</h3>
			<Link href={"/dashboard/register"}>
				<span className="">register here</span>
			</Link>
		</section>
	);
}
