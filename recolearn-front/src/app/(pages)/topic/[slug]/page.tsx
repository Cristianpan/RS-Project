import { Typography, Box, Divider } from "@mui/material";
import { ActivitiesSection, TopicHeader } from "@/components";

export default function Topic() {
  return (
    <>
      <Box sx={{ padding: "1rem" }}>
        <TopicHeader />

        <Divider sx={{ borderColor: "grey.400", margin: "1rem 0" }} />

        <Typography sx={{ fontSize: "0.9rem", color: "grey.800" }}>
          La inteligencia artificial (IA) desempeña un papel crucial en los
          sistemas de recomendación, ya que permite analizar grandes volúmenes
          de datos para predecir con precisión las preferencias de los usuarios.
          A través de técnicas como el aprendizaje automático, estos sistemas
          pueden identificar patrones de comportamiento, historial de
          navegación, compras anteriores o interacciones, y utilizarlos para
          ofrecer sugerencias personalizadas. Esta capacidad de adaptación
          mejora la experiencia del usuario al mostrarle contenido o productos
          relevantes que probablemente le interesen
        </Typography>
        <br />
        <Typography sx={{ fontSize: "0.9rem", color: "grey.800" }}>
          Además, la IA permite que los sistemas de recomendación evolucionen
          continuamente mediante el aprendizaje automático supervisado y no
          supervisado. Los algoritmos pueden ajustar sus predicciones conforme
          reciben nuevos datos, lo que los hace más precisos con el tiempo.
          Modelos como las redes neuronales profundas o los sistemas de filtrado
          colaborativo avanzado ayudan a detectar incluso relaciones complejas
          entre usuarios y elementos, que serían imposibles de identificar
          mediante métodos tradicionales.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "0.9rem", color: "grey.800" }}>
          Finalmente, los sistemas de recomendación impulsados por IA no solo
          benefician a los usuarios, sino también a las empresas, ya que
          aumentan el tiempo de permanencia en plataformas, mejoran la
          conversión de ventas y fomentan la fidelización. Plataformas como
          Netflix, Amazon o Spotify son ejemplos claros de cómo la IA potencia
          recomendaciones altamente eficaces. En un mundo cada vez más orientado
          a la personalización, la inteligencia artificial se consolida como una
          herramienta esencial para anticiparse a las necesidades y deseos del
          usuario.
        </Typography>
        <Box sx={{ marginTop: "2rem" }}>
          <Typography variant="h2" sx={{ fontSize: "1.6rem" }}>
            ¡Evalua tus conocimientos!
          </Typography>

          <ActivitiesSection />
        </Box>
      </Box>
    </>
  );
}
