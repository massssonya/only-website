import { ChangeEvent, forwardRef } from "react";

type KeepTextareaProps = {
	value: string;
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const CreateNoteTextarea = forwardRef<HTMLTextAreaElement, KeepTextareaProps>(
	({ value, onChange }, ref) => {
		return (
			<textarea
				ref={ref}
				value={value}
				placeholder="Заметка"
				className="py-2 text-lg textarea resize-none overflow-y-hidden"
				tabIndex={2}
				onChange={onChange}
			/>
		);
	}
);

CreateNoteTextarea.displayName = "CreateNoteTextarea";
