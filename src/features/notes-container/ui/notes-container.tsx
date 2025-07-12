"use client";

import { Note } from "@/features/note/ui";
import { fetchNotes } from "@/shared/api/notes";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

export function NotesContainer({ className }: { className?: string }) {
	const {data: notes} = useQuery({queryKey: ["notes"], queryFn: fetchNotes})
	return (
		<div
			className={clsx(
				"columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4",
				className
			)}
		>
			{notes?.map((note) => (
				<div key={note.id} className="break-inside-avoid mb-4">
					<Note note={note} />
				</div>
			))}
		</div>
	);
}
