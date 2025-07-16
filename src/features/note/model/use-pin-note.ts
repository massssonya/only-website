import { updateNote } from "@/shared/api/notes";
import { useNoteCache } from "@/shared/api/query/use-note-cache";
import { Note } from "@/shared/types/note";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";

export function usePinNote(noteId: Note["id"], currentPinned: boolean) {
	const { updateNoteOptimistically, invalidateNotes } = useNoteCache();

	const togglePinMutation = useMutation({
		mutationFn: updateNote,
		onSuccess: () => {
			invalidateNotes();
		}
	});

	const togglePinNote = useCallback(() => {
		const nextPinned = !currentPinned;

		updateNoteOptimistically(noteId, { pinned: nextPinned });

		togglePinMutation.mutate({
			id: noteId,
			updated: { pinned: nextPinned }
		});
	}, [noteId, currentPinned, togglePinMutation, updateNoteOptimistically]);

	return {
		togglePinNote
	};
}
