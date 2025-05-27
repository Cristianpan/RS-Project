import { IActivity } from "@/interfaces/activity-type";
import { IContentType } from "@/interfaces/content-type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecommendationStore {
  currentContent: IContentType | null;
  contents: IContentType[];
  activities: IActivity[];
  setCurrentContent: (content: IContentType | null) => void;
  setContents: (contents: IContentType[]) => void;
  setActivities: (activities: IActivity[]) => void;
}

const useRecommendationStore = create<RecommendationStore>()(
  persist(
    (set) => ({
      currentContent: null,
      contents: [],
      activities: [],
      setCurrentContent: (content) => set({ currentContent: content }),
      setContents: (contents) => set({ contents }),
      setActivities: (activities) => set({ activities }),
    }),
    {
      name: "recommendation-storage",
    }
  )
);

export default useRecommendationStore;
