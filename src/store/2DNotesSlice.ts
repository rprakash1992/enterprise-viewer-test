import type { StateCreator } from "zustand";

export interface TwoDNote {
  id: string;
  title: string;
}

export interface TwoDNotesSlice {
  twoDNotes: TwoDNote[];
  selectedTwoDNote: TwoDNote | null;

  setTwoDNotes: (items: TwoDNote[]) => void;
  addTwoDNote: () => void;
  selectTwoDNote: (item: TwoDNote | null) => void;
}

export const createTwoDNotesSlice: StateCreator<
  TwoDNotesSlice,
  [["zustand/devtools", never]],
  [],
  TwoDNotesSlice
> = (set) => {
  return {
    twoDNotes: [],
    selectedTwoDNote: null,

    setTwoDNotes: (val) => {
      set({ twoDNotes: val });
    },
    addTwoDNote: () => {
      set((state) => {
        const newNoteId = state.twoDNotes.length;
        const newNote = {
          id: String(newNoteId),
          title: `Note ${newNoteId}`,
        };
        return { twoDNotes: [...state.twoDNotes, newNote] };
      });
    },
    selectTwoDNote: (val) => {
      set({ selectedTwoDNote: val });
    },
  };
};
