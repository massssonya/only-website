"use client";

import { useAutoResizeTextarea } from "@/shared/hooks";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

export function useCreateKeep() {
	const [textareaValue, setTextareaValue] = useState("");
	const [focusedInsideForm, setIsFocusedInsideForm] = useState(false);
	const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useAutoResizeTextarea(textareaValue);

	const textareaActions = {
		change: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setTextareaValue(e.target.value);
		}
	};

	const inputActions = {
		keydown: (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter" || e.key === "Tab") {
				e.preventDefault();
				if (textareaRef.current) {
					textareaRef.current.focus();
					textareaRef.current.select();
				}
			}
		}
	};

	const formActions = {
		focus: () => {
			if (blurTimeoutRef.current) {
				clearTimeout(blurTimeoutRef.current);
			}
			setIsFocusedInsideForm(true);
		},
		blur: () => {
			blurTimeoutRef.current = setTimeout(() => {
				setIsFocusedInsideForm(false);
				handleSubmit();
			}, 100);
		}
	};

	const handleSubmit = () => {
		const title = inputRef.current?.value.trim();
		const note = textareaRef.current?.value.trim();
		if (note) {
			console.log({ title, note });
		}
		setTextareaValue("");
	};

	useEffect(() => {
		return () => {
			if (blurTimeoutRef.current) {
				clearTimeout(blurTimeoutRef.current);
			}
		};
	}, []);

	return {
		refs: {
			formRef,
			inputRef,
			textareaRef
		},
		textareaActions,
		formActions,
		inputActions,
		textareaValue,
		handleSubmit,
		focusedInsideForm
	};
}
