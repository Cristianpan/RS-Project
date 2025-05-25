// store/useStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AccordionState = Record<string, boolean>;

interface SidebarStore {
  accordions: AccordionState;
  toggleAccordion: (key: string) => void;
}

const useSidebarStore = create<SidebarStore>()(
  persist(
    (set, get) => ({
      accordions: {},

      toggleAccordion: (key) => {
        const current = get().accordions[key] || false;
        set((state) => ({
          accordions: {
            ...state.accordions,
            [key]: !current,
          },
        }));
      },
    }),
    {
      name: 'accordion-storage',
    }
  )
);

export default useSidebarStore;