import { experimental_extendTheme } from "@mui/material/styles";

export const theme = experimental_extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#ffffff",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
  },
});
