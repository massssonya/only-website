import {
	addNote,
	deleteNote,
	getNotes,
	getDeletedNotes,
	updateNote
} from "@/shared/lib/data/mockNotes";
import { Note } from "@/shared/types/note";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const deleted = searchParams.get("deleted");
	let notes = deleted ? getDeletedNotes() : getNotes();
	return NextResponse.json(notes, { status: 200 });
}

export async function POST(req: Request) {
	const body = await req.json();

	const newNote: Note = {
		id: uuidv4(),
		text: body.text,
		header: body.header || undefined,
		pinned: false
	};
	addNote(newNote);
	return NextResponse.json(newNote, { status: 201 });
}

export async function DELETE(req: Request) {
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
