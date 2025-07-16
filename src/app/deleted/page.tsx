import { NotesContainer } from "@/features/notes-container";

export default function DeletedPage() {
	return (
		<main className="relative w-full">
			<div className="container flex flex-col gap-4 mx-auto">
				<div className="flex flex-row justify-center gap-6">
					<h1 className="text-xl self-center italic">Заметки удаляются из корзины через 7 дней.</h1>
					<button className="button text-blue-600 underline">Очистить корзину</button>
				</div>

				
			</div>
		</main>
	)
}
