import { IStudent } from "@/interfaces/student";
import { IAPIResponse } from "@/interfaces/api-response";
import { apiUrls } from "@/constants/api-url";

interface IStudentResponse {
  student_id: number;
  name: string;
  blindness_level: number;
}

export const getStudentsAdapter = async (): Promise<IStudent[]> => {
  const { students: studentAPI } = apiUrls;
  const response = await fetch(studentAPI.all);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: IAPIResponse<IStudentResponse[]> = await response.json();

  const students: IStudent[] = data.body.map(
    ({ student_id, name, blindness_level }) => ({
      id: student_id,
      name: name,
      blindnessLevel: blindness_level,
    })
  );

  return students;
};
