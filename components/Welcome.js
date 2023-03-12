import React from "react";
import { useSpring, animated, useTrail, a } from "@react-spring/web";
// import { createClient } from "@supabase/supabase-js";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Trail } from "./Trail";
import { MyButton } from "./MyButton";

import styles from "../styles/pages.module.css";

// const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Welcome({ goNext, slide }) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 0}>
          <span>Welcome to</span>
          <span className={styles.major}>Project</span>
          <span className={styles.major}>Buddy</span>
          <MyButton
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            disableElevation
            onClick={goNext}
          >
            Get Started
          </MyButton>
        </Trail>
      </div>
    </div>
  );
}
