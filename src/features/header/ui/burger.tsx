
import { toggleSidebar } from "@/shared/store";
import { Menu } from "@geist-ui/icons";

export function Burger() {
	return (
		<button
			onClick={toggleSidebar()}
			className="flex flex-col items-center justify-center gap-0.5 cursor-pointer  p-3 button-hover">
			<Menu />
		</button>
	);
}
