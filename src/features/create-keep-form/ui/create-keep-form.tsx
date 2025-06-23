"use client";

import { KeepInput } from "./keep-input";
import { KeepTextarea } from "./keep-textarea";
import { useCreateKeep } from "../model";
import clsx from "clsx";

export function CreateKeepForm({ className }: { className?: string }) {
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
			{focusedInsideForm ? (
				<KeepInput ref={refs.inputRef} onKeyDown={inputActions.keydown} />
			) : null}

			<KeepTextarea
				ref={refs.textareaRef}
				value={textareaValue}
				onChange={textareaActions.change}
			/>
		</form>
	);
}
