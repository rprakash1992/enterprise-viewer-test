import type { StateCreator } from "zustand";

export interface TwoDNote {
  id: string;
  title: string;
  bgColor: string;
  borderColor: string;
  bgImage: string;
  showBorder: boolean;
  showBg: boolean;
  autoFit: boolean;
  visibility: boolean;
  checked: boolean;
}

export interface TwoDNotesSlice {
  twoDNotes: TwoDNote[];

  selectAllTwoDNotes: () => void;
  setTwoDNotes: (items: TwoDNote[]) => void;
  addTwoDNote: (newNote: TwoDNote) => void;
  selectTwoDNote: (noteId: string) => void;
  updateTwoDNote: (item: TwoDNote) => void;
  deleteTwoDNote: () => void;
}

export const createTwoDNotesSlice: StateCreator<
  TwoDNotesSlice,
  [["zustand/devtools", never]],
  [],
  TwoDNotesSlice
> = (set) => {
  return {
    twoDNotes: [],

    selectAllTwoDNotes: () => {
      set((state) => {
        const allChecked = state.twoDNotes.every((note) => note.checked);
        return {
          twoDNotes: state.twoDNotes.map((n) => ({
            ...n,
            checked: allChecked ? false : true,
          })),
        };
      });
    },
    setTwoDNotes: (val) => {
      set({ twoDNotes: val });
    },
    addTwoDNote: (newNote) => {
      set((state) => ({ twoDNotes: [...state.twoDNotes, newNote] }));
    },
    selectTwoDNote: (noteId) => {
      set((state) => ({
        twoDNotes: state.twoDNotes.map((note) =>
          note.id === noteId ? { ...note, checked: !note.checked } : note,
        ),
      }));
    },
    updateTwoDNote: (note) => {
      set((state) => ({
        twoDNotes: state.twoDNotes.map((n) => (n.id === note.id ? note : n)),
      }));
    },
    deleteTwoDNote: () => {
      set((state) => ({
        twoDNotes: state.twoDNotes.filter((note) => !note.checked),
      }));
    },
  };
};
