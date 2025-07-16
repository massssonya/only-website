"use client";

import { Note } from "@/shared/types/note";
import { useAppQueryClient } from "../use-app-query-client";

export function useNoteCache() {
	const queryClient = useAppQueryClient();

	const invalidateNotes = () => {
		queryClient.invalidateQueries({ queryKey: ["notes"] });
	};

	const updateNoteOptimistically = (id: string, updatedFields: Partial<Note>) => {
		queryClient.setQueryData<Note[]>(["notes"], (prevNotes) => {
			if (!prevNotes) return prevNotes;
			return prevNotes.map((note) =>
				note.id === id ? { ...note, ...updatedFields } : note
			);
		});
	};

	return {
		invalidateNotes,
		updateNoteOptimistically
	};
}
