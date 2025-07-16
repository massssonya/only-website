import { Note } from "@/shared/types/note";

export function NoteHeader({ title }: { title?: Note["header"] }) {
	return <h3 className="text-xl font-semibold mb-2">{title}</h3>;
}
