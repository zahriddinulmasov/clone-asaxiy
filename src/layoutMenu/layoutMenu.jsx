import { Outlet } from "react-router-dom";

import { Header } from "../containers/header/header";
import { ScrollTop } from "../components/scrollsToTop/keyboardScroll";
import { Footer } from "../containers/footer/footer";
import Navbar from "../containers/navbar/navbar";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, CssBaseline, Fab, Toolbar } from "@mui/material";

export const LayoutMenu = (props) => (
  <Box>
    <CssBaseline />
    <Toolbar id="back-to-top-anchor">
      <Header />
      <Navbar />
    </Toolbar>

    <Box>
      <ScrollTop {...props}>
        <Fab
          sx={{
            ":hover": {
              backgroundColor: "rgb(0, 141, 255)",
              color: "#F5F5F5",
            },
            ":active": {
              backgroundColor: "rgb(0, 141, 255)",
              color: "#ffffff",
            },

            backgroundColor: "#ffffff",
            color: "#5a5a5a",
            width: "50px",
            height: "50px",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon sx={{ fontSize: "1.8rem" }} />
        </Fab>
      </ScrollTop>

      <Outlet />
    </Box>

    <Footer />
  </Box>
);
