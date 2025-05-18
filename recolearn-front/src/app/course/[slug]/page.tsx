import { Unit, Topic } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso: Inglés",
};

export default function Course() {
  return (
    <Unit title="Unidad 1: Los sistemas de recomendacion">
      <Topic />
    </Unit>
  );
}
