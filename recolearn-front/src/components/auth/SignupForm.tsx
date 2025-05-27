"use client";
import useAuthStore from "@/stores/useAuthStore";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { registerStudent } from "@/adapters/registerStudent";
import { CardAuthForm } from "./CardAuthForm";

export const SignupForm = () => {
  const [blindnessLevel, setBlindnessLevel] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const { login } = useAuthStore();

  const handleChange = (event: SelectChangeEvent<number>) => {
    const blindnessLevel = event.target.value;
    setBlindnessLevel(blindnessLevel);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const student = await registerStudent(name, blindnessLevel -  1);

    if (!student) {
      alert("Error al registrarse. Inténtalo de nuevo.");
      return;
    }

    login(student);
  };

  return (
    <CardAuthForm label="Registrarse">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          variant="outlined"
          sx={{ marginBottom: "1.5rem" }}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl fullWidth required>
          <InputLabel>Nivel de Ceguera</InputLabel>
          <Select
            value={blindnessLevel == 0 ? "" : blindnessLevel}
            label="Nivel de Ceguera"
            name="blindnessLevel"
            onChange={handleChange}
            required
          >
            <MenuItem value="1">No aplica</MenuItem>
            <MenuItem value="2">Bajo</MenuItem>
            <MenuItem value="3">Moderado</MenuItem>
            <MenuItem value="4 ">Alto</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            marginTop: "1rem",
            width: "100%",
            display: "flex",
            gap: "0.25rem",
            flexDirection: "column",
          }}
        >
          <Button type="submit" variant="contained" sx={{ marginTop: "1rem" }}>
            Registrarse
          </Button>

          <Button
            variant="outlined"
            sx={{ marginTop: "1rem" }}
            LinkComponent={Link}
            href="/login"
          >
            Iniciar Sesión
          </Button>
        </Box>
      </form>
    </CardAuthForm>
  );
};
