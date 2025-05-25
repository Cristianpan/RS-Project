import { Unit, CourseTopicCard } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso: Inglés",
};

export default function Course() {
  return (
    <Unit title="Unidad 1: Los sistemas de recomendacion">
      <CourseTopicCard title="Inteligencia Artificial y los sistemas de recomendacion" />
    </Unit>
  );
}
