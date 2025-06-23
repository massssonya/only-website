import Link from "next/link";

export default function NotFound() {
	return (
		<main className="w-full h-[100vh] flex flex-col items-center justify-center">
			<h1 className="h1 font-[ttruns] font-medium flex flex-col items-center">
				<span>404</span>
				<span>Упс, что-то пошло не так.</span>
			</h1>

			<p className="text-sm font-light text-gray-800 max-w-xl text-center mt-4">
				Приносим извинения! Запрашиваемая вами страница не существует. Возможно,
				она устарела, удалена или в адресной строке был введен неверный адрес.
			</p>
			<Link href="/" className="button mt-6 text-blue-600 underline">
				На главную
			</Link>
		</main>
	);
}
