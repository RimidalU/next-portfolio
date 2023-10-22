import { RegisterForm } from "@/components/registerForm/RegisterForm";
import Link from "next/link";

export default function Register() {
	return (
		<section className="flex flex-col flex-1 gap-5 h-full">
			<h1 className="title-text">Let&apos;s get acquainted!</h1>
			<h3 className="text-lg italic">
				Let&apos;s create a new account where you can share your achievements and be inspired by others!
			</h3>
			<div className="w-full max-w-xs self-center">
				<RegisterForm />
			</div>
			<h3 className="">
				If you already have an account,
				<Link href={`/dashboard/login`}>
					<span className="text‑current">please login here</span>
				</Link>
			</h3>
		</section>
	);
}
