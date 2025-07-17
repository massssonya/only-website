import clsx from "clsx";
import { Pin } from "@geist-ui/icons";
import type { Note } from "@/shared/types/note";
import { usePinNote } from "../model";
import { memo, useCallback, useRef } from "react";
import { NoteFooter } from "./note-footer";
import { NoteHeader } from "./note-header";
import { NoteText } from "./note-text";

type Props = {
	note: Note;
	className?: string;
	isDeleted?: boolean;
};

const Note = memo(function Note({ note, className, isDeleted }: Props) {
	const noteRef = useRef<HTMLDivElement>(null);
	const isPinned = note.pinned;

	const { togglePinNote } = usePinNote(note.id, isPinned);

	const handleTogglePin = useCallback(() => {
		togglePinNote();
		noteRef.current?.blur();
	}, [note.id, isPinned]);

	return (
		<div
			ref={noteRef}
			tabIndex={0}
			className={clsx(
				"bg-white border border-gray-300 rounded-xl px-4 py-3 hover:shadow-md hover:border-white transition-all duration-300 ease-in-out group relative",
				className
			)}
		>
			<NoteHeader title={note.header} />
			<NoteText text={note.text} />

			{isDeleted ? null : (
				<Pin
					className={clsx(
						"absolute top-2 right-2 button-hover cursor-pointer transition-opacity duration-300 ease-in-out",
						isPinned
							? ""
							: "opacity-0 group-hover:opacity-100 group-focus:opacity-100"
					)}
					onClick={handleTogglePin}
				/>
			)}
			<NoteFooter noteId={note.id} />
		</div>
	);
})

export { Note };
