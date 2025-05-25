import { Box } from "@mui/material"

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
        <div className="loader"></div>
    </Box>
  )
}
