import { Note } from "@/shared/types/note";
import { deleteNoteById } from "@/shared/api/notes";
import { useMutation } from "@tanstack/react-query";
import { useNoteCache } from "@/shared/api/query/use-note-cache";

export function useDeleteNote(noteId: Note["id"]) {
	const { invalidateNotes } = useNoteCache();

	const deleteMutation = useMutation({
		mutationFn: deleteNoteById,
		onSuccess: () => {
			invalidateNotes();
		}
	});

	const deleteNote = () => {
		deleteMutation.mutate(noteId);
	};

	return {
		deleteNote
	};
}
