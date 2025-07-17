"use client";

import { ROUTES } from "@/shared/config/routes";
import { useSidebarOpen } from "@/shared/store";
import { TransitionLink } from "@/shared/ui";

import { ChevronRight } from "@geist-ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, Suspense } from "react";

export function Sidebar() {
	const isOpen = useSidebarOpen();
	const pathname = usePathname();

	const routes = Object.values(ROUTES).map((route) => (
		<LinkItem
			key={route.name}
			route={route}
			isActive={pathname === route.path}
			isOpenSidebar={isOpen}
		/>
	));

	return (
		<Suspense fallback={null}>
			<div
				style={{
					width: isOpen ? "25%" : "4rem",
					transition: "width 300ms ease-in-out",
					animationDelay: "0.5s"
				}} //
				className={` bg-gray-200 h-full transition-[width] duration-300 ease-in-out`}
			>
				<nav className="my-2 px-2 flex flex-col gap-2 text-md  md:text-xl">
					{routes}
				</nav>
			</div>
		</Suspense>
	);
}

type RouteType = (typeof ROUTES)[keyof typeof ROUTES];

interface LinkItemProps {
	route: RouteType;
	isActive: boolean;
	isOpenSidebar: boolean;
}

const LinkItemComponent = ({
	route,
	isActive,
	isOpenSidebar,
}: LinkItemProps) => {
	return (
		<TransitionLink
			href={route.path}
			key={route.name}
			style={{
				position: "relative",
				borderRadius: isOpenSidebar ? "0 16px 16px 0" : "9999px",
				WebkitTransitionDuration: "300ms",
			}}
			className={`
        h-12 flex items-center
        pl-3 pr-4 py-2
        transition-all duration-300 ease-in-out
        ${isActive ? "bg-yellow-100 hover:bg-yellow-100" : "hover:bg-neutral-100"}
        relative overflow-hidden
      `}
		>
			<span
				style={{ position: "absolute", left: "0.75rem" }}
				className="top-1/2 -translate-y-1/2"
			>
				{route.icon ?? <ChevronRight />}
			</span>

			<span
				style={{
					WebkitPaddingStart: isOpenSidebar ? "1rem" : "0",
					opacity: isOpenSidebar ? 1 : 0,
					marginLeft: "2.5rem",
				}}
				className={`
          transition-all duration-300
          ${isOpenSidebar ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}
          whitespace-nowrap
        `}
			>
				{route.name}
			</span>
		</TransitionLink>
	);
};

const areEqual = (
	prevProps: LinkItemProps,
	nextProps: LinkItemProps
): boolean => {
	return (
		prevProps.route.path === nextProps.route.path &&
		prevProps.isActive === nextProps.isActive &&
		prevProps.isOpenSidebar === nextProps.isOpenSidebar
	);
};

const LinkItem = memo(LinkItemComponent, areEqual);
