import clsx from "clsx";
import {
	Archive,
	// MoreVertical,
	Image,
	UserPlus,
	Bell,
	Smile,
	X
} from "@geist-ui/icons";
import type { Note } from "@/shared/types/note";
import { useDeleteNote } from "../model";

type Props = {
	note: Note;
	className?: string;
};

export function Note({ note, className }: Props) {
	const { deleteNote } = useDeleteNote(note.id);
	return (
		<div
			className={clsx(
				"bg-white border border-gray-300 rounded-xl px-4 py-3 hover:shadow-md hover:border-white transition-all duration-300 ease-in-out group relative",
				className
			)}
		>
			{note.header && (
				<h3 className="text-xl font-semibold mb-2">{note.header}</h3>
			)}
			<p className="text-sm text-gray-800 whitespace-pre-line">{note.text}</p>

			<footer className="mt-3 flex justify-between text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
				<Smile className="button-hover" />
				<Bell className="button-hover" />
				<UserPlus className="button-hover" />
				<Image className="button-hover" />
				<Archive className="button-hover" />
				<X className="button-hover" onClick={deleteNote} />
			</footer>
		</div>
	);
}
