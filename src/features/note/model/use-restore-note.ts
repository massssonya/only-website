import { Note } from "@/shared/types/note";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchNoteById, restoreNote } from "@/shared/api/notes";
import { useNoteCache } from "@/shared/api/query/use-note-cache";

export function useRestoreNote(noteId:Note["id"]){
    const {data: note} = useQuery({
        queryKey: ["note", noteId],
        queryFn: () => fetchNoteById(noteId)
    })

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