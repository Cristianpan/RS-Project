import { IStudent } from "@/interfaces/student";
import { IAPIResponse } from "@/interfaces/api-response";
import { apiUrls } from "@/constants/api-url";

interface IStudentResponse {
  id: number;
  name: string;
  blindness_level: number;
}

export const registerStudent = async (
  name: string,
  blindnessLevel: number
): Promise<IStudent | null> => {
  const { students: studentAPI } = apiUrls;
  const response = await fetch(studentAPI.all, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, blindness_level: blindnessLevel }),
  });

  if (response.status === 201) {
    const data: IAPIResponse<IStudentResponse> = await response.json();

    const { body: student } = data;
    return {
      id: student.id,
      name: student.name,
      blindnessLevel: student.blindness_level,
    };
  }

  return null;
};
