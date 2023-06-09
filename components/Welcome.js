import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Stack, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import WindowIcon from "@mui/icons-material/Window";
import EditIcon from "@mui/icons-material/Edit";
import { TypeAnimation } from "react-type-animation";

import { Trail } from "./Trail";
import { MyButton } from "./MyButton";

import styles from "../styles/pages.module.css";
import dog from "../assets/images/Untitled_Artwork.png";

export default function Welcome({ goNext, slide, edit = false }) {
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
            spacing={2}
          >
            <Image src={dog} alt="Dog" width={300} height={300} />
            <Stack
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              spacing={1}
            >
              {visited && (
                <TypeAnimation
                  style={{ fontSize: "1.5rem" }}
                  sequence={[`Woof woof woof woof!`]}
                  wrapper={Box}
                  cursor={false}
                />
              )}
              {visited && (
                <TypeAnimation
                  style={{ fontSize: "1.5rem", color: "#ef8354" }}
                  sequence={[
                    2500,
                    "(WARNING,",
                    600,
                    "(WARNING, DO NOT POKE HOPPA)",
                  ]}
                  wrapper={Box}
                  cursor={false}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
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
            startIcon={edit ? <ArrowBackIosIcon /> : <WindowIcon />}
            disableElevation
            LinkComponent={Link}
            href="/projects"
          >
            {edit ? "Back to Projects" : "See Projects"}
          </MyButton>
          <MyButton
            variant="contained"
            endIcon={edit ? <EditIcon /> : <ArrowForwardIosIcon />}
            disableElevation
            onClick={goNext}
          >
            {edit ? "Edit Project" : "Get Started"}
          </MyButton>
        </Box>
      </div>
    </div>
  );
}
