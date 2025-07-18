"use client";

import { usePathname } from "next/navigation";
import "../styles.css";
import { Burger } from "./burger";
import { SearchInput } from "./search";
import { ROUTES } from "@/shared/config/routes";

export function Header() {
	const pathname = usePathname();
	const route = Object.values(ROUTES).find((route) => route.path === pathname);
	return (
		<header className="z-50 fixed top-0 left-0 h-16 bg-h w-full flex items-center justify-between px-4 py-2 border-b border-b-neutral-300">
			<div className="flex items-center gap-4 w-2/12">
				<Burger />
				<div id="header-page-name" className="logo text-2xl font-tt-runs font-bold">
					{route?.name}
				</div>
			</div>

			<div className="w-1/2">
				<SearchInput />
			</div>

			<div className="button-group">
			</div>

			<div className="profile"></div>
		</header>
	);
}
