import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { createClient } from "@supabase/supabase-js";
import { Stack, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { TypeAnimation } from "react-type-animation";

import { Trail } from "./Trail";
import { MyButton } from "./MyButton";

import styles from "../styles/pages.module.css";
import dog from "../assets/images/Untitled_Artwork.png";
// const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Welcome({ goNext, slide }) {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    if (!visited && slide == 0) {
      setVisited(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide == 0]);

  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 0}>
          <span>Welcome to</span>
          <span className={styles.major}>Project</span>
          <span className={styles.major}>Buddy</span>
        </Trail>
        <Stack spacing={3} className={styles.textbox}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Image src={dog} alt="Dog" width={300} height={300} />
            {visited && (
              <TypeAnimation
                style={{ padding: "2rem", fontSize: "1.5rem" }}
                sequence={["Woof woof woof woof!"]}
                wrapper={Box}
                cursor
              />
            )}
          </Stack>
        </Stack>
        <MyButton
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          disableElevation
          onClick={goNext}
        >
          Get Started
        </MyButton>
      </div>
    </div>
  );
}
