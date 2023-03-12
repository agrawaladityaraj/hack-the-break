import React, { useState } from "react";
import { Stack, AccordionDetails, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import MySelect from "./MySelect";
import { Trail } from "./Trail";
import { MyButton } from "./MyButton";
import { Accordion, AccordionSummary } from "./MyAccordion";

import styles from "../styles/pages.module.css";

export default function TechSack({
  goPrev,
  goNext,
  slide,
  technologies,
  setTechnologies,
}) {
  const [data, setData] = useState([
    {
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
      value: "Bender Bending Rodríguez",
    },

    {
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
      value: "Carol Miller",
    },
    {
      image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
      label: "Homer Simpson",
      value: "Homer Simpson",
    },
    {
      image:
        "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
      label: "Spongebob Squarepants",
      value: "Spongebob Squarepants",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 4}>
          <span className={styles.major}>Project Tech</span>
          <span className={styles.major}>Stack?</span>
        </Trail>
        <JaydenPrompt
          text={"What's your tech stack? You can search below!"}
          open={slide == 4}
        />
        <Stack spacing={3} className={styles.textbox}>
          <Stack>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Choose technologies
            </Typography>
            <MySelect
              data={data}
              setData={setData}
              addTechnology={(value) => {
                setTechnologies({
                  error: "",
                  value: [...technologies.value, value],
                });
              }}
            />
          </Stack>
        </Stack>
        <PrevNext goPrev={goPrev} goNext={goNext} />
      </div>
    </div>
  );
}
