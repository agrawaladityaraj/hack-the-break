import React from "react";
import { Box } from "@mui/material";
import { MyButton } from "./MyButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "../styles/pages.module.css";

export default function PrevNext({ goPrev, goNext }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <MyButton
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        disableElevation
        onClick={goPrev}
      >
        Previous
      </MyButton>
      <MyButton
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
        disableElevation
        onClick={goNext}
      >
        Next
      </MyButton>
    </Box>
  );
}
