import { DeletedNotesReminder } from "@/features/deleted-notes-reminder";
import { NotesContainer } from "@/features/notes-container";

export default function DeletedPage() {
	return (
		<main className="relative w-full">
			<div className="container flex flex-col gap-4 mx-auto">
				<DeletedNotesReminder />
				<NotesContainer />
			</div>
		</main>
	)
}
