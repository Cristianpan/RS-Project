import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AccordionState = Record<string, boolean>;

interface UnitAccordionStore {
  accordions: AccordionState;
  toggleAccordion: (course: string, key: string) => void;
}

const useUnitAccordionStore = create<UnitAccordionStore>()(
  persist(
    (set, get) => ({
      accordions: {},

      toggleAccordion: (course, key) => {
        const courseKey = `${course}-${key}`;
        const current = get().accordions[courseKey] || false;
        set((state) => ({
          accordions: {
            ...state.accordions,
            [courseKey]: !current,
          },
        }));
      },
    }),
    {
      name: 'unit-accordion-storage',
    }
  )
);

export default useUnitAccordionStore;