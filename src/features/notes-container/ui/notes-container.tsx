"use client";

import { Note } from "@/features/note/ui";
import { fetchDeletedNotes, fetchNotes } from "@/shared/api/notes";
import { ROUTES } from "@/shared/config/routes";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function NotesContainer({ className }: { className?: string }) {
	const pathname = usePathname();
	const isDeleted = pathname === ROUTES.DELETED.path;
	const { data: notes } = useQuery({
		queryKey: ["notes", isDeleted ? "deleted" : "all"],
		queryFn: isDeleted ? fetchDeletedNotes : fetchNotes
	});

	return (
		<div
			className={clsx(
				"columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4",
				className
			)}
		>
			{notes?.map((note) => (
				<div
					key={note.id}
					className="inline-block w-full break-inside-avoid overflow-hidden mb-4"
				>
					<Note note={note} isDeleted={isDeleted} />
				</div>
			))}
		</div>
	);
}
