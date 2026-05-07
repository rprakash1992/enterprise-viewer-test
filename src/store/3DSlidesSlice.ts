import type { StateCreator } from "zustand";

export interface ThreeDSlide {
  id: string;
  title: string;
}

export interface ThreeDSlidesSlice {
  threeDSlides: ThreeDSlide[];
  selected3DSlide: ThreeDSlide | null;

  setThreeDSlides: (items: ThreeDSlide[]) => void;
  addThreeDSlide: () => void;
  deleteThreeDSlide: () => void;
  selectSlide: (val: ThreeDSlide | null) => void;
}

export const createThreeDSlidesSlice: StateCreator<
  ThreeDSlidesSlice,
  [["zustand/devtools", never]],
  [],
  ThreeDSlidesSlice
> = (set) => {
  return {
    threeDSlides: [],
    selected3DSlide: null,

    setThreeDSlides: (val) => {
      set({ threeDSlides: val });
    },
    addThreeDSlide: () => {
      set((state) => {
        const newSlideId = state.threeDSlides.length;
        const newSlide = {
          id: String(newSlideId),
          title: `Slide ${newSlideId}`,
        };
        return { threeDSlides: [...state.threeDSlides, newSlide] };
      });
    },
    deleteThreeDSlide: () => {
      set((state) => ({
        threeDSlides: [
          ...state.threeDSlides.filter(
            (slide) => slide.id !== state.selected3DSlide?.id,
          ),
        ],
      }));
    },
    selectSlide: (val) => {
      set({ selected3DSlide: val });
    },
  };
};
