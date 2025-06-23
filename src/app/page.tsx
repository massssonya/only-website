import { CreateKeepForm } from "@/features/create-keep-form";


export default function Home() {
	return (
		<main className="relative w-full">
			<CreateKeepForm className="absolute left-1/2 -translate-x-1/2" />
		</main>
	);
}
