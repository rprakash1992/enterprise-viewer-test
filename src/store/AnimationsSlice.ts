import type { StateCreator } from "zustand";

export type AnimationType = "linear" | "vector" | "transient";

export interface Animation {
  id: string;
  animationType: AnimationType;
  title: string;
  speed: number;
  frames: number;
  scaleFactor: number;
  checked: boolean;
}

export interface AnimationsSlice {
  animations: Animation[];
  animationType: AnimationType | null;

  setAnimationType: (animationType: AnimationType | null) => void;
  setAnimations: (items: Animation[]) => void;
  addAnimation: (newAnimation: Animation) => void;
  selectAnimation: (animationId: string) => void;
  updateAnimation: (item: Animation) => void;
  deleteAnimation: () => void;
}

export const createAnimationsSlice: StateCreator<
  AnimationsSlice,
  [["zustand/devtools", never]],
  [],
  AnimationsSlice
> = (set) => {
  return {
    animations: [],
    animationType: "linear",

    setAnimationType: (val) => {
      set({ animationType: val });
    },
    setAnimations: (val) => {
      set({ animations: val });
    },
    addAnimation: (newAnimation) => {
      set((state) => ({ animations: [...state.animations, newAnimation] }));
    },
    selectAnimation: (animationId: string) => {
      set((state) => ({
        animations: state.animations.map((animation) =>
          animation.id === animationId
            ? { ...animation, checked: !animation.checked }
            : animation,
        ),
      }));
    },
    updateAnimation: (animation) => {
      set((state) => ({
        animations: state.animations.map((ani) =>
          ani.id === animation.id ? animation : ani,
        ),
      }));
    },
    deleteAnimation: () => {
      set((state) => ({
        animations: state.animations.filter((animation) => !animation.checked),
      }));
    },
  };
};
