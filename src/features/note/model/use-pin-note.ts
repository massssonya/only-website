import { updateNote } from "@/shared/api/notes";
import { useNoteCache } from "@/shared/api/query/use-note-cache";
import { Note } from "@/shared/types/note";
import { useMutation } from "@tanstack/react-query";

export function usePinNote(noteId: Note["id"], isPinned: boolean) {
	const { invalidateNotes } = useNoteCache();

	const togglePinMutation = useMutation({
		mutationFn: updateNote,
		onSuccess: () => {
			invalidateNotes();
		}
	});

	const togglePinNote = () => {
		togglePinMutation.mutate({
			id: noteId,
			updated: { pinned: !isPinned }
		});
	};

	return {
		togglePinNote
	};
}
