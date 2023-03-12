import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import MySelect from "./MySelect";
import { MyChip } from "./MyChip";
import { Trail } from "./Trail";
import { MyButton } from "./MyButton";
import { Accordion, AccordionSummary } from "./MyAccordion";

import styles from "../styles/pages.module.css";

const data = [
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
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
  },
];

export default function TechSack({
  goPrev,
  goNext,
  slide,
  technologies,
  setTechnologies,
}) {
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
              data={data.filter(
                (item) =>
                  technologies.value.findIndex((tech) => tech == item.value) ==
                  -1
              )}
              addTechnology={(value) => {
                setTechnologies({
                  error: "",
                  value: [...technologies.value, value],
                });
              }}
            />
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {technologies.value.map((item, index) => (
              <MyChip
                key={index}
                label={item}
                sx={{ mr: "1em", mb: "1em", color: "white" }}
                deleteIcon={<CloseIcon />}
                onDelete={() => {
                  setTechnologies({
                    ...technologies,
                    value: [
                      ...technologies.value.slice(0, index),
                      ...technologies.value.slice(
                        index + 1,
                        technologies.value.length
                      ),
                    ],
                  });
                }}
              />
            ))}
          </Box>
          {technologies.error && (
            <Typography color="error" variant="subtitle2">
              {technologies.error}
            </Typography>
          )}
        </Stack>
        <PrevNext goPrev={goPrev} goNext={goNext} />
      </div>
    </div>
  );
}
