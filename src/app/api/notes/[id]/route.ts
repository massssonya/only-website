import { deleteNoteById } from "@/shared/api/notes";
import { getNote, updateNote } from "@/shared/lib/data/mockNotes";
import { NextResponse } from "next/server";


type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const note = getNote(params.id);
  if (!note) return NextResponse.json({ error: "Note not found" }, { status: 404 });
  return NextResponse.json(note);
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = updateNote(params.id, body);
  if (!updated) return NextResponse.json({ error: "Note not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  const deleted = deleteNoteById(params.id);
  if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(deleted);
}
