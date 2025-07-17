import { Note } from "@/shared/types/note";

const mockNotes: Note[] = [
	{
		id: "1",
		header: "Header",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in error numquam amet maxime delectus quis, similique nesciunt! Quo doloribus eveniet aut quaerat quibusdam alias ex sit blanditiis. Aut, amet.",
		pinned: true
	},
	{
		id: "2",
		header: "Header",
		text: "Text",
		pinned: true
	},
	{
		id: "3",
		header: "Header",
		text: "Text",
		pinned: false
	},
	{
		id: "4",
		header: "Header",
		text: "Text",
		pinned: false
	},
	{
		id: "5",
		header: "Header",
		text: "Text",
		pinned: true
	}
];

let mockDeletedNotes: Note[] | [] = [];

export function getNotes() {
	return mockNotes;
}

export function getNoteById(id: string) {
	return mockNotes.find((note) => note.id === id);
}

export function addNote(note: Note) {
	mockNotes.push(note);
	return note;
}

export async function updateNote({
	id,
	updated
}: {
	id: string;
	updated: Partial<Note>;
}) {
	const note = mockNotes.find((note) => note.id === id);
	if (!note) return null;

	Object.assign(note, updated);
	return note;
}

export function deleteNote(id: string) {
	const index = mockNotes.findIndex((note) => note.id === id);
	if (index !== -1) {
		const deleted = mockNotes[index];
		mockDeletedNotes = [...mockDeletedNotes, deleted];
		mockNotes.splice(index, 1);
		return deleted;
	}
	return null;
}


export function getDeletedNotes(){
	return mockDeletedNotes;
}

export function clearDeletedNotes(){
	mockDeletedNotes = []
}

export function deleteDeletedNoteById(id: string){
	const index = mockDeletedNotes.findIndex((note) => note.id === id);
	if (index !== -1) {
		const deleted = mockDeletedNotes[index];
		mockDeletedNotes.splice(index, 1);
		return deleted;
	}
	return null;
}