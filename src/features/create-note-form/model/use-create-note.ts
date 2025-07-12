"use client";

import { createNote } from "@/shared/api/notes";
import { useNoteCache } from "@/shared/api/query/use-note-cache";
import { useAutoResizeTextarea } from "@/shared/hooks";
import { useMutation } from "@tanstack/react-query";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

export function useCreateNote() {
	const [textareaValue, setTextareaValue] = useState("");
	const [focusedInsideForm, setIsFocusedInsideForm] = useState(false);
	const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const formRef = useRef<HTMLFormElement>(null);
	const headerRef = useRef<HTMLInputElement>(null);
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
		},
		reset: () => {
			setTextareaValue("");
			if (headerRef.current) {
				headerRef.current.value = "";
			}
		}
	};

	const { invalidateNotes } = useNoteCache();

	const createMutation = useMutation({
		mutationFn: createNote,
		onSuccess: () => {
			invalidateNotes();
			formActions.reset();
		}
	});

	const handleSubmit = () => {
		const header = headerRef.current?.value.trim();
		const text = textareaRef.current?.value.trim();
		if (text) {
			createMutation.mutate({ text, header });
		}
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
			headerRef,
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
