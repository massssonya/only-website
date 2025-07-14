"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
	trigger: React.ReactNode;
	children: React.ReactNode;
};

export function DropdownMenu({ trigger, children }: Props) {
	const triggerRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

	const toggleOpen = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		if (!isOpen) return;

		const handlePosition = () => {
			const triggerEl = triggerRef.current;
			const dropdownEl = dropdownRef.current;
			if (!triggerEl || !dropdownEl) return;

			const triggerRect = triggerEl.getBoundingClientRect();
			const dropdownWidth = dropdownEl.offsetWidth;
			const viewportWidth = window.innerWidth;

			const shouldOpenLeft = triggerRect.left + dropdownWidth > viewportWidth;

			const pos = {
				top: triggerRect.bottom + window.scrollY,
				left: shouldOpenLeft
					? triggerRect.right - dropdownWidth + window.scrollX
					: triggerRect.left + window.scrollX
			};

			setPosition(pos);
		};

		requestAnimationFrame(handlePosition);
	}, [isOpen]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node) &&
				!triggerRef.current?.contains(e.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<>
			<div ref={triggerRef} onClick={toggleOpen} className="inline-block cursor-pointer relative">
				{trigger}
			</div>

			{isOpen && (
				<div
					ref={dropdownRef}
					className="fixed w-48 bg-white shadow-sm z-50 rounded py-2 flex flex-col text-black"
					style={{
						top: position?.top ?? -9999, // временно скрываем, если позиция ещё не рассчитана
						left: position?.left ?? -9999
					}}
				>
					{children}
				</div>
			)}
		</>
	);
}
