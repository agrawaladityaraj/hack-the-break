import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import MySelect from "./MySelect";
import { MyChip } from "./MyChip";
import { Trail } from "./Trail";

import styles from "../styles/pages.module.css";

export default function Overview({ goPrev, goNext, slide }) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}></div>
      <Trail open={slide == 5}>
        <span className={styles.major}>Project Overview</span>
      </Trail>
      <JaydenPrompt
        text={
          "Ah okay, that works I guess. I’ve heard worse. What steps are you taking to complete this project? When you want to add a stage, press “Add stage”. When you’re done, hit “next step”!"
        }
        open={slide == 5}
      />
    </div>
  );
}
