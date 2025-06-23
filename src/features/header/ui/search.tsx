"use client";

import { Search, X } from "@geist-ui/icons";
import { ChangeEvent, useState } from "react";

export function SearchInput() {
	const [search, setSearch] = useState("");
	const isEntered = search.length > 0;
	const resetSearch = () => {
		setSearch("");
	};
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<div className="flex items-center gap-2 w-full">
			<form
				action=""
				className="flex items-center justify-between gap-2 w-full bg-gray-200 focus-within:bg-white px-4 py-2 rounded-4xl"
			>
				<Search className="button-hover" />
				<input
					value={search}
					onChange={handleSearch}
					type="text"
					placeholder="Поиск"
					className="w-full text-xl focus:outline-none"
				/>
				{isEntered && <X className="button-hover" onClick={resetSearch} />}
			</form>
		</div>
	);
}
