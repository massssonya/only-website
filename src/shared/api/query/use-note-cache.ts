"use client";

import { useAppQueryClient } from "../use-app-query-client";

export function useNoteCache() {
	const queryClient = useAppQueryClient();

	const invalidateNotes = () => {
		queryClient.invalidateQueries({ queryKey: ["notes"] });
	};

	return {
		invalidateNotes
	};
}
