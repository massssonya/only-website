import { Home, Settings, Trash } from "@geist-ui/icons";

export const ROUTES = {
	HOME: {
		path: "/",
		name: "Home",
		icon: <Home />
	},
	SETTINGS: {
		path: "/settings",
		name: "Settings",
		icon: <Settings />
	},
	DELETED: {
		path: "/deleted",
		name: "Deleted",
		icon: <Trash />
	}
};
