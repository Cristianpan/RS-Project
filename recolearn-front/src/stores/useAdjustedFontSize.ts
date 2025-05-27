import { create } from 'zustand';


interface AdjustedFontSizeStore {
  adjustedFontSize: number;
  setAdjustedFontSize: (size: number) => void;
}


const useAdjustedFontSizeStore = create<AdjustedFontSizeStore>((set) => ({
  adjustedFontSize: 100,
  setAdjustedFontSize: (size: number) => set({ adjustedFontSize: size }),
}));


export default useAdjustedFontSizeStore;