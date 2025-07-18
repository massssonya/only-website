import { Note } from "@/shared/types/note";
import { useMutation } from "@tanstack/react-query";
import { restoreNote } from "@/shared/api/notes";
import { useNoteCache } from "@/shared/api/query/use-note-cache";

export function useRestoreNote(note:Note){
    const { invalidateNotes } = useNoteCache();

    const restoreMutation = useMutation({
		mutationFn: restoreNote,
		onSuccess: () => {
			invalidateNotes();
		}
	});

    const restoreCurrentNote = () => {
        if(note){
            restoreMutation.mutate(note)
        }
    }

    return {
        restoreCurrentNote
    }
}