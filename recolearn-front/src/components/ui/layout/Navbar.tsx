"use client";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MLink,
  IconButton,
  Badge,
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Avatar } from "./Avatar";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import useAuthStore from "@/stores/useAuthStore";
import { FontSizeAdjuster } from "./FontSizeAdjuster";
import useAdjustedFontSizeStore from "@/stores/useAdjustedFontSize";

const DEFULT_FONT_SIZE = 100;

export const Navbar = () => {
  const { logout, user } = useAuthStore();
  const { adjustedFontSize, setAdjustedFontSize } = useAdjustedFontSizeStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (user && user.id) {
      const adjustedValue = user.blindnessLevel * 10;

      setAdjustedFontSize(DEFULT_FONT_SIZE + adjustedValue);
    }
  }, [user, setAdjustedFontSize]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${adjustedFontSize}%`;

    return () => {
      document.documentElement.style.fontSize = `${DEFULT_FONT_SIZE}%`;
    };
  }, [adjustedFontSize, setAdjustedFontSize]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ top: 0, right: 0, padding: "0 1rem" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <MLink
          component={NextLink}
          href="/"
          underline="none"
          sx={{
            color: "#fff",
            letterSpacing: "1px",
            fontSize: "1.25rem",
          }}
        >
          RecomLearn | FMAT
        </MLink>

        <Box display="flex" alignItems="center" sx={{ gap: "0.5rem" }}>
          <Box>
            <IconButton>
              <Badge
                variant="dot"
                overlap="circular"
                color="secondary"
                sx={{
                  span: {
                    width: "0.6rem",
                    height: "0.6rem",
                    borderRadius: "50%",
                  },
                }}
              >
                <NotificationsNoneRoundedIcon
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge
                variant="dot"
                overlap="circular"
                color="secondary"
                sx={{
                  span: {
                    width: "0.6rem",
                    height: "0.6rem",
                    borderRadius: "50%",
                  },
                }}
              >
                <ChatBubbleOutlineRoundedIcon
                  sx={{ color: "#fff" }}
                  fontSize="small"
                />
              </Badge>
            </IconButton>
          </Box>

          <div>
            <Button
              endIcon={<Avatar userName={user?.name || ""} />}
              sx={{
                textTransform: "uppercase",
                fontWeight: 300,
                fontSize: "1rem",
                color: "#fff",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {user?.name}
            </Button>
            <Menu
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiMenu-paper": {
                  top: "3.5rem !important",
                  left: "auto !important",
                  right: "3rem !important",
                  width: "15rem",
                  padding: "0.5rem",
                },
              }}
            >
              <MenuItem sx={{ marginBottom: "0.5rem" }}>
                <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                  ¡Bienvenido de nuevo!
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ marginBottom: "0.5rem" }}>
                <FontSizeAdjuster />
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  logout();
                  setAdjustedFontSize(DEFULT_FONT_SIZE);
                }}
              >
                Cerrar Sesión
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
