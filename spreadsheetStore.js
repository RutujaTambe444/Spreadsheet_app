// store/spreadsheetStore.js
import create from 'zustand';

export const useSpreadsheetStore = create((set) => ({
  cells: Array.from({ length: 50 }, () => Array(20).fill('')),
  history: [],
  redoStack: [],
  updateCell: (row, col, value) => 
    set((state) => {
      const newCells = [...state.cells];
      state.history.push([...state.cells]);
      newCells[row][col] = value;
      return { cells: newCells, redoStack: [] };
    }),
  undo: () => 
    set((state) => {
      if (state.history.length > 0) {
        const previousState = state.history.pop();
        state.redoStack.push(state.cells);
        return { cells: previousState };
      }
    }),
  redo: () => 
    set((state) => {
      if (state.redoStack.length > 0) {
        const nextState = state.redoStack.pop();
        state.history.push(state.cells);
        return { cells: nextState };
      }
    }),
}));
