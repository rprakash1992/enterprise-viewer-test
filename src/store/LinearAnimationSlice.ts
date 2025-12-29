import type { StateCreator } from "zustand";

export interface LinearAnimation {
  id: string;
  title: string;
}

export interface LinearAnimationSlice {
  linearAnimation: LinearAnimation[];
  selectedLinearAnimation: LinearAnimation | null;

  setLinearAnimations: (items: LinearAnimation[]) => void;
  addLinearAnimation: () => void;
  deleteLinearAnimation: (id: string) => void;
  selectLinearAnimation: (val: LinearAnimation | null) => void;
}

export const createLinearAnimationSlice: StateCreator<
  LinearAnimationSlice,
  [["zustand/devtools", never]],
  [],
  LinearAnimationSlice
> = (set) => {
  return {
    linearAnimation: [],
    selectedLinearAnimation: null,

    setLinearAnimations: (val) => {
      set({ linearAnimation: val });
    },
    addLinearAnimation: () => {
      set((state) => {
        const newLinearAnimationId = state.linearAnimation.length;
        const newLinearAnimation = {
          id: String(newLinearAnimationId),
          title: `Linear Animation ${newLinearAnimationId}`,
        };
        return {
          linearAnimation: [...state.linearAnimation, newLinearAnimation],
        };
      });
    },
    deleteLinearAnimation: (slideId) => {
      set((state) => ({
        linearAnimation: [
          ...state.linearAnimation.filter((slide) => slide.id !== slideId),
        ],
      }));
    },
    selectLinearAnimation: (val) => {
      set({ selectedLinearAnimation: val });
    },
  };
};
