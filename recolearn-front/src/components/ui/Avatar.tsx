"use client";
import { useEffect, useState } from "react";
import { Avatar as AvatarMui } from "@mui/material";

interface AvatarProps {
  userName: string;
}

export const Avatar = ({ userName }: AvatarProps) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const tokens = userName.split(" ");

    const initialLetters = tokens[0].charAt(0) + tokens[2]?.charAt(0);

    setText(initialLetters);
  }, [userName]);

  return (
    <AvatarMui
      sx={{
        bgcolor: "gray.100",
        textTransform: "uppercase",
        fontWeight: 400
      }}
      alt={userName}
    >
      {text}
    </AvatarMui>
  );
};
