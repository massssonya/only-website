import { Note } from "@/shared/types/note";

const mockNotes: Note[] = [
	{
		id: "1",
		header: "Header",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in error numquam amet maxime delectus quis, similique nesciunt! Quo doloribus eveniet aut quaerat quibusdam alias ex sit blanditiis. Aut, amet."
	},
	{
		id: "2",
		header: "Header",
		text: "Text"
	},
	{
		id: "3",
		header: "Header",
		text: "Text"
	},
	{
		id: "4",
		header: "Header",
		text: "Text"
	},
	{
		id: "5",
		header: "Header",
		text: "Text"
	},
	{
		id: "6",
		header: "Header",
		text: "Text"
	},
	{
		id: "7",
		header: "Header",
		text: "Text"
	}
];

export function getNotes() {
	return mockNotes;
}

export function getNote(id: string) {
	return mockNotes.find((note) => note.id === id);
}

export function addNote(note: Note) {
	mockNotes.push(note);
	return note;
}

export function updateNote(id: string, updated: Partial<Note>) {
	const note = mockNotes.find((note) => note.id === id);
	if (!note) return null;
	Object.assign(note, updated);
	return note;
}

export function deleteNote(id: string) {
	const index = mockNotes.findIndex((note) => note.id === id);
	if (index !== -1) {
		const deleted = mockNotes[index];
		mockNotes.splice(index, 1);
		return deleted;
	}
	return null;
}
