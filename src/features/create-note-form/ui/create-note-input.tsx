import clsx from "clsx";
import { forwardRef, KeyboardEvent } from "react";

type KeepInputProps = {
	onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
	className?: string;
};

export const CreateNoteInput = forwardRef<HTMLInputElement, KeepInputProps>(
	({ onKeyDown, className }, ref) => {
		return (
			<input
				ref={ref}
				type="text"
				placeholder="Название..."
				className={clsx(
					"text-xl font-bold input transition-all duration-300 ease-in-out",
					className
				)}
				tabIndex={1}
				onKeyDown={onKeyDown}
			/>
		);
	}
);

CreateNoteInput.displayName = "CreateNoteInput";
