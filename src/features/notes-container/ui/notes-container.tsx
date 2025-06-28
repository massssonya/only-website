import { Note } from "@/features/note/ui";
import { INote } from "@/features/note/ui/note";
import clsx from "clsx";

const notes: INote[] = [
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
	},
	{
		id: "8",
		header: "Header",
		text: "Text"
	}
	,
	{
		id: "9",
		header: "Header",
		text: "Text"
	}
	,
	{
		id: "10",
		header: "Header",
		text: "Text"
	}
];

export function NotesContainer({ className }: { className?: string }) {
	return (
		<div
			className={clsx(
				"columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4",
				className
			)}
		>
			{notes.map((note) => (
				<div key={note.id} className="break-inside-avoid mb-4">
					<Note note={note} />
				</div>
			))}
		</div>
	);
}
