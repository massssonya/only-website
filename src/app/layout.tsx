import type { Metadata } from "next";
import "@/app/globals.css";
import { ttCommons, ttRuns } from "./fonts";
import { Header } from "@/features/header";
import { Sidebar } from "@/features/sidebar";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" className={`${ttCommons.variable} ${ttRuns.variable}`}>
			<body className="font-base h-screen">
				<Providers>
					<Header />
					<div className="w-full h-[calc(100vh-4rem)] flex absolute top-16">
						<Sidebar />
						<div className="w-full h-full overflow-scroll px-4 py-3">
							{children}
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
