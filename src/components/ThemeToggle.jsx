import { FormControlLabel, FormGroup, useColorScheme } from "@mui/material";
import React from "react";
import { MaterialUISwitch } from "./Switch";

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <FormGroup sx={{ display: { xs: "none", md: "flex" } }}>
      <FormControlLabel
        control={
          <MaterialUISwitch checked={mode === "dark"} onChange={handleChange} />
        }
        label={mode === "dark" ? "Dark Mode" : "Light Mode"}
      />
    </FormGroup>
  );
};

export default ThemeToggle;
