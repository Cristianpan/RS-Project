"use client";

import { getActivityRecommendations } from "@/adapters/getActivityRecommendations";
import { getContentRecommendations } from "@/adapters/getContentRecommendations";
import useAuthStore from "@/stores/useAuthStore";
import useRecommendationStore from "@/stores/useRecommendationStore";
import { useEffect } from "react";

export const Recommendations = () => {
  const { user } = useAuthStore();

  const {
    currentContent,
    contents,
    setContents,
    setActivities,
    setCurrentContent,
  } = useRecommendationStore();

  useEffect(() => {
    async function getRecommendations(studentId: number) {
      const recommendations = await getContentRecommendations(studentId);
      setContents(recommendations);
    }

    if (user && user.id) {
      getRecommendations(user.id);
    } else {
      setContents([]);
      setCurrentContent(null);
    }
  }, [user, setContents, setCurrentContent]);

  useEffect(() => {
    async function getRecommendations(studentId: number, contentId: number) {
      const recommendations = await getActivityRecommendations(
        studentId,
        contentId
      );
      setActivities(recommendations);
    }

    if (user && user.id && currentContent) {
      getRecommendations(user.id, currentContent.id);
    } else {
      setActivities([]);
    }
  }, [currentContent, contents, setActivities, user]);

  return null;
};
