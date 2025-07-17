import {
	addNote,
	deleteNote,
	getNotes,
	updateNote,
	getDeletedNotes,
	clearDeletedNotes,
	deleteDeletedNoteById,
	getNoteById,
} from "@/shared/lib/data/mockNotes";
import { Note } from "@/shared/types/note";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const id = searchParams.get("id");
	const deleted = searchParams.get("deleted");

	if (id) {
		const note = getNoteById(id);
		if (!note) {
			return NextResponse.json({ error: `Not found note with id ${id}` }, { status: 404 });
		}
		return NextResponse.json(note, { status: 200 });
	}

	const notes = deleted ? getDeletedNotes() : getNotes();
	return NextResponse.json(notes, { status: 200 });
}

export async function POST(req: Request) {
	const body = await req.json();
	const isRestoreNote = !!body["id"]

	const newNote: Note = {
		id: isRestoreNote ? body.id : uuidv4(),
		text: body.text,
		header: body.header || undefined,
		pinned: isRestoreNote ? body.pinned : false
	};
	addNote(newNote);
	if (isRestoreNote) deleteDeletedNoteById(body.id);
	return NextResponse.json(newNote, { status: 201 });
}

export async function DELETE(req: Request) {
	const { searchParams } = new URL(req.url);
	const deletedNotes = searchParams.get("deleted");
	if (deletedNotes) {
		try {
			clearDeletedNotes();
			return NextResponse.json(`Deleted notes clered`, { status: 200 });
		} catch {
			return NextResponse.json({ error: "Not found deleted notes" }, { status: 404 });
		}

	}
	const body = await req.json();

	const deleted = deleteNote(body.id);
	if (!deleted)
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json(`Note ${deleted.id} deleted`, { status: 200 });
}

export async function PATCH(req: Request) {
	const body = await req.json();
	const updated = updateNote({
		id: body.id,
		updated: body.updated
	});
	if (!updated)
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json(updated, { status: 200 });
}
