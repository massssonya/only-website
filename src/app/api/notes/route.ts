import { addNote, deleteNote, getNotes } from "@/shared/lib/data/mockNotes";
import { Note } from "@/shared/types/note";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
	return NextResponse.json(getNotes(), { status: 200 });
}

export async function POST(req: Request) {
	const body = await req.json();

	const newNote: Note = {
		id: uuidv4(),
		text: body.text,
		header: body.header || undefined
	};
	addNote(newNote);
	return NextResponse.json(newNote, { status: 201 });
}

export async function DELETE(req: Request) {
	const body = await req.json();

	const deleted =  deleteNote(body.id);
	if (!deleted)
		return NextResponse.json({ error: "Not found" }, { status: 404 });
	return NextResponse.json(`Note ${deleted.id} deleted`, { status: 200 });
}
