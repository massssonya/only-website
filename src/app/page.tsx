"use client";

import { CreateNoteForm } from "@/features/create-note-form/ui";
import { NotesContainer } from "@/features/notes-container";

export default function Home() {
	return (
		<main className="relative w-full">
			<div className="container flex flex-col gap-4 mx-auto">

				<CreateNoteForm className="self-center" />
				<NotesContainer />
			</div>
		</main>
	);
}
