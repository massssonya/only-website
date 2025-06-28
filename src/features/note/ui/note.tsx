import clsx from "clsx";
import {
	Archive,
	MoreVertical,
	Image,
	UserPlus,
	Bell,
	Smile
} from "@geist-ui/icons";

export interface INote {
	id: string;
	header?: string;
	text: string;
}

type Props = {
	note: INote;
	className?: string;
};

export function Note({ note, className }: Props) {
	return (
		<div
			className={clsx(
				"bg-white border border-gray-300 rounded-xl px-4 py-3 hover:shadow-md hover:border-white transition-all duration-300 ease-in-out",
				className
			)}
		>
			{note.header && <h3 className="text-xl font-semibold mb-2">{note.header}</h3>}
			<p className="text-sm text-gray-800 whitespace-pre-line">{note.text}</p>

			<footer className="mt-3 flex justify-between text-gray-500">
				<Smile className="button-hover" />
				<Bell className="button-hover" />
				<UserPlus className="button-hover" />
				<Image className="button-hover" />
				<Archive className="button-hover" />
				<MoreVertical className="button-hover" />
			</footer>
		</div>
	);
}
