import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IActions {
	toggleSidebar: () => void;
	setHasHydrated: (hydrated: boolean) => void;
}

interface IInitialState {
	isLoading: boolean;
	isSidebarOpen: boolean;
	hasHydrated: boolean;
}

interface ISidebarState extends IInitialState, IActions {}

const initialState: IInitialState = {
	isLoading: false,
	isSidebarOpen: false,
	hasHydrated: false
};

const sidebarStore: StateCreator<ISidebarState> = (set) => ({
	...initialState,
	toggleSidebar: () =>
		set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
	setHasHydrated: (hydrated: boolean) => set({ hasHydrated: hydrated })
});

const useSidebarStore = create<ISidebarState>()(
	devtools(
		persist(sidebarStore, {
			name: "sidebarStore",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				isSidebarOpen: state.isSidebarOpen
			}),
			skipHydration: true,
			onRehydrateStorage: () => (state) => {
				state?.setHasHydrated(true);
			}
		})
	)
);

export const useHydration = () => {
  const _hasHydrated = useSidebarStore((state) => state.hasHydrated);
  if (!_hasHydrated) {
    throw useSidebarStore.persist.rehydrate();
  }
};

export const useSidebarOpen = () => {
  useHydration();
  return useSidebarStore((state) => state.isSidebarOpen);
};
export const toggleSidebar = () => useSidebarStore.getState().toggleSidebar;

export const rehydrateSidebar = () => useSidebarStore.persist.rehydrate();
