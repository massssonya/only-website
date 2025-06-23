import localFont from "next/font/local";

export const ttRuns = localFont({
	src: [
		{
			path: "../../public/fonts/tt-runs-trial-cdnfonts/TT Runs Trial Regular.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../../public/fonts/tt-runs-trial-cdnfonts/TT Runs Trial Medium.ttf",
			weight: "500",
			style: "normal"
		},
		{
			path: "../../public/fonts/tt-runs-trial-cdnfonts/TT Runs Trial Bold.ttf",
			weight: "700",
			style: "normal"
		}
	],
	variable: "--font-tt-runs",
	display: "swap"
});

export const ttCommons = localFont({
	src: [
		{
			path: "../../public/fonts/tt-commons/TT Commons Pro Trial Compact Light.ttf",
			weight: "100",
			style: "normal"
		},
		{
			path: "../../public/fonts/tt-commons/TT Commons Pro Trial Compact Regular.ttf",
			weight: "400",
			style: "normal"
		}
	],
	variable: "--font-commons",
	display: "swap"
});
