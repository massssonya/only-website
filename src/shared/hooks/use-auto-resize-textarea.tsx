import { useEffect, useRef } from "react";

export function useAutoResizeTextarea(value: string) {
	const ref = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const textarea = ref.current;
		if (!textarea) return;

		// Зафиксировать текущую ширину, чтобы scrollHeight был точным
		const computed = getComputedStyle(textarea);
		const width = textarea.offsetWidth
			- parseFloat(computed.paddingLeft)
			- parseFloat(computed.paddingRight);

		// Сохраняем текущее scrollHeight до сброса
		textarea.style.height = "auto";
		const newHeight = textarea.scrollHeight;

		// Устанавливаем минимально необходимую высоту
		textarea.style.height = `${newHeight}px`;
	}, [value]);

	return ref;
}
