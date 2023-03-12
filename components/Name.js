import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";

import PrevNext from "./PrevNext";
import { Trail } from "./Trail";
import { MyButton } from "./MyButton";
import { MyTextField } from "./MyTextField";

import styles from "../styles/pages.module.css";

export default function Name({ goPrev, goNext, slide, name, setName }) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 1}>
          <span className={styles.major}>Project Name?</span>
        </Trail>
        <Stack className={styles.textbox}>
          <MyTextField
            variant="outlined"
            fullWidth
            value={name.value}
            onChange={(e) => setName({ value: e.target.value, error: "" })}
            label={name.value ? "" : "Name"}
          />
        </Stack>
        <PrevNext goPrev={goPrev} goNext={goNext} />
      </div>
    </div>
  );
}
