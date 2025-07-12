import { Note } from "../types/note";

export async function fetchNotes(): Promise<Note[]> {
	const res = await fetch("/api/notes");
	if (!res.ok) {
		throw new Error("Failed to fetch notes");
	}
	return res.json();
}

export async function createNote(data: Omit<Note, "id">): Promise<Note> {
	const res = await fetch("/api/notes", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		}
	});
	if (!res.ok) {
		throw new Error("Failed to create note");
	}
	return res.json();
}

export async function deleteNote(id: Note["id"]): Promise<void> {
	const res = await fetch(`/api/notes/${id}`, {
		method: "DELETE",
	});
	if (!res.ok) {
		throw new Error("Failed to delete note");
	}
}
