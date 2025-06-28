"use client";

import { CreateNoteInput } from "./create-note-input";
import { CreateNoteTextarea } from "./create-note-textarea";
import { useCreateKeep } from "../model";
import clsx from "clsx";

export function CreateNoteForm({ className }: { className?: string }) {
	const {
		refs,
		textareaActions,
		formActions,
		inputActions,
		textareaValue,
		handleSubmit,
		focusedInsideForm
	} = useCreateKeep();

	return (
		<form
			ref={refs.formRef}
			className={clsx(
				"px-4 py-2 flex flex-col w-1/3 shadow-2xl rounded-xl bg-white",
				className
			)}
			onSubmit={handleSubmit}
			onFocus={formActions.focus}
			onBlur={formActions.blur}
		>
			<CreateNoteInput
				ref={refs.inputRef}
				onKeyDown={inputActions.keydown}
				className={focusedInsideForm ? "h-12 py-2" : "h-[0px] opacity-0"}
			/>

			<CreateNoteTextarea
				ref={refs.textareaRef}
				value={textareaValue}
				onChange={textareaActions.change}
			/>
		</form>
	);
}
