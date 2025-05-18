import { Unit, Topic } from "@/components";
import type { Metadata } from "next";


interface CourseProps {
  params: { slug: string };
}

export const metadata: Metadata = {
  title: "Curso: Inglés",
};

export default function Course({ params }: CourseProps) {
  return (
    <Unit title="Unidad 1: Los sistemas de recomendacion">
      <Topic />
    </Unit>
  );
}
