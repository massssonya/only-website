import clsx from "clsx";
import {
	Archive,
	MoreVertical,
	Image,
	UserPlus,
	Bell,
	Smile,
	Pin
} from "@geist-ui/icons";
import type { Note } from "@/shared/types/note";
import { useDeleteNote } from "../model";
import { DropdownMenu } from "@/shared/ui";

type Props = {
	note: Note;
	className?: string;
};

export function Note({ note, className }: Props) {
	const { deleteNote } = useDeleteNote(note.id);

	const items = [
		{
			label: "Удалить заметку",
			onClick: () => deleteNote()
		}
	];

	return (
		<div
			tabIndex={0}
			className={clsx(
				"bg-white border border-gray-300 rounded-xl px-4 py-3 hover:shadow-md hover:border-white transition-all duration-300 ease-in-out group relative",
				className
			)}
		>
			<Pin
				className="absolute top-2 right-2 button-hover opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 ease-in-out group-focus:opacity-100"
				onClick={() => {
					console.log("pin");
				}}
			/>
			{note.header && (
				<h3 className="text-xl font-semibold mb-2">{note.header}</h3>
			)}
			<p className="text-sm text-gray-800 whitespace-pre-line">{note.text}</p>

			<footer className="mt-3 flex justify-between text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-focus:opacity-100">
				<Smile className="button-hover" />
				<Bell className="button-hover" />
				<UserPlus className="button-hover" />
				<Image className="button-hover" />
				<Archive className="button-hover" />
				<DropdownMenu trigger={<MoreVertical className="button-hover" />}>
					{items.map((item, index) => (
						<button
							key={index}
							className="hover:bg-gray-200 text-left text-sm px-4 py-1 cursor-pointer "
							onClick={item.onClick}
						>
							{item.label}
						</button>
					))}
				</DropdownMenu>
			</footer>
		</div>
	);
}
