import { IAPIResponse } from "@/interfaces/api-response";
import { apiUrls } from "@/constants/api-url";
import { IContentType } from "@/interfaces/content-type";

export const getContentRecommendations = async (
  studentId: number
): Promise<IContentType[]> => {
  const { recomm: recommAPI } = apiUrls;
  const response = await fetch(recommAPI.content(studentId));

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: IAPIResponse<IContentType[]> = await response.json();

  return data.body;
};
