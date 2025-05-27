import { IActivity } from "@/interfaces/activity-type";
import { IAPIResponse } from "@/interfaces/api-response";
import { apiUrls } from "@/constants/api-url";

export const getActivityRecommendations = async (
  studentId: number,
  contentId: number
): Promise<IActivity[]> => {
  const { recomm: recommAPI } = apiUrls;
  const response = await fetch(recommAPI.activity(studentId, contentId));

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: IAPIResponse<IActivity[]> = await response.json();

  return data.body;
};
