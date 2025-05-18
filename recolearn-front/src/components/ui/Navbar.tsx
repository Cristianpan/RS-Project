import {
  AppBar,
  Toolbar,
  Box,
  Link as MLink,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Avatar } from "./Avatar";
import NextLink from "next/link";
export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ top: 0, right: 0, padding: "0 1rem" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <MLink
          component={NextLink}
          href="/"
          underline="none"
          sx={{
            color: "secondary.main",
            letterSpacing: "1px",
            fontSize: "1.25rem"
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
                <NotificationsNoneRoundedIcon sx={{ color: "#fff" }} />
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
                <ChatBubbleOutlineRoundedIcon sx={{ color: "#fff" }} />
              </Badge>
            </IconButton>
          </Box>

          <Button
            endIcon={<Avatar userName="Diana David Pool Pan" />}
            sx={{
              textTransform: "uppercase",
              fontWeight: "300",
              fontSize: "0.9rem",
              color: "#fff",
            }}
          >
            Diana David Pool Pan {" "}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
