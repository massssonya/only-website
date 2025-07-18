import { DropdownMenu } from "@/shared/ui";
import { MoreVertical } from "@geist-ui/icons";
import { useDeleteNote } from "../model";
import { Note } from "@/shared/types/note";
import { usePathname } from "next/navigation";
import { useRestoreNote } from "../model/use-restore-note";

type MenuItem = {
	label: string;
	onClick: () => void;
};

type Pathname = "/" | "/deleted";

export function NoteFooter({ note }: { note: Note }) {
	const pathname = usePathname();
	const { deleteNote } = useDeleteNote(note.id);
	const { restoreCurrentNote } = useRestoreNote(note)
	const menuItems: Record<Pathname, MenuItem[]> = {
		"/": [
			{
				label: "Удалить заметку",
				onClick: () => deleteNote()
			}
		],
		"/deleted": [
			{
				label: "Восстановить заметку",

				onClick: () => restoreCurrentNote()
			}
		]
	};
	
	return (
		<footer className="mt-3 flex justify-between text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-focus:opacity-100">
			<div className="flex-1"></div>
			<DropdownMenu trigger={<MoreVertical className="button-hover" />}>
				{menuItems[pathname as Pathname].map((item, index) => (
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
	);
}
