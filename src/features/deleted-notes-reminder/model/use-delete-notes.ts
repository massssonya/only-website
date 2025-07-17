import { clearDeletedNotes, deleteNoteById } from "@/shared/api/notes";
import { useMutation } from "@tanstack/react-query";
import { useNoteCache } from "@/shared/api/query/use-note-cache";

export function useDeleteNotes(){
    const { invalidateNotes } = useNoteCache();

    const deleteMutation = useMutation({
		mutationFn: clearDeletedNotes,
		onSuccess: () => {
			invalidateNotes();
		}
	});

    const deleteDeletedNotes = () => {
		deleteMutation.mutate();
	};

	return {
		deleteDeletedNotes
	};
}