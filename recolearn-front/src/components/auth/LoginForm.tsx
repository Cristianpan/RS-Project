"use client";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  Box,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { loginAdapter } from "@/adapters/login";
import useAuthStore from "@/stores/useAuthStore";
import { IUser } from "@/interfaces/User";
import { getUsersAdapter } from "@/adapters/getUsers";

export const LoginForm = () => {
  const [selectedStudent, setSelectedStudent] = useState<number>();
  const [users, setUsers] = useState<IUser[]>([]);

  const { login } = useAuthStore();

  const handleChange = (event: SelectChangeEvent<number>) => {
    const selectedId = event.target.value;
    setSelectedStudent(selectedId);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsersAdapter();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = await loginAdapter(selectedStudent ?? 0);
    if (user) {
      login(user);
    }
  };

  return (
    <>
      <Card sx={{ padding: 2, width: "35rem", textAlign: "center" }}>
        <CardContent>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.5rem",
              margin: "1rem 0",
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            RecomLearn - FMAT
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              margin: "1rem 0",
              color: "text.primary",
              fontWeight: "semi-bold",
            }}
          >
            Iniciar Sesión
          </Typography>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel>Estudiante</InputLabel>
              <Select
                value={selectedStudent || ""}
                label="Estudiante"
                onChange={handleChange}
              >
                {users.map(({id, name}) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
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
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: "1rem" }}
              >
                Iniciar Sesión
              </Button>

              <Button
                variant="outlined"
                sx={{ marginTop: "1rem" }}
                LinkComponent={Link}
                href="/signup"
              >
                ¡Registrarte!
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
