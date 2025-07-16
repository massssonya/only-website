import { Note } from "@/shared/types/note";

export function NoteText({ text }: { text: Note["text"] }) {
	return <p className="text-sm text-gray-800 whitespace-pre-line">{text}</p>;
}
