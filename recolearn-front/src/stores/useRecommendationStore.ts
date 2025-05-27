import { IActivity } from "@/interfaces/activity-type";
import { IContentType } from "@/interfaces/content-type";
import { create } from "zustand";

interface RecommendationStore {
  currentContent: IContentType | null;
  contents: IContentType[];
  activities: IActivity[];
  setCurrentContent: (content: IContentType | null) => void;
  setContents: (contents: IContentType[]) => void;
  setActivities: (activities: IActivity[]) => void;
}

const useRecommendationStore = create<RecommendationStore>()((set) => ({
  currentContent: null,
  contents: [],
  activities: [],
  setCurrentContent: (content) => set({ currentContent: content }),
  setContents: (contents) => set({ contents }),
  setActivities: (activities) => set({ activities }),
}));

export default useRecommendationStore;
