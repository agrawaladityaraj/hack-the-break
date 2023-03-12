import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import MySelect from "./MySelect";
import { MyChip } from "./MyChip";
import { Trail } from "./Trail";

import styles from "../styles/pages.module.css";
import jayden1 from "../assets/images/SurprisedTransparent.png";
import jayden2 from "../assets/images/ThatCouldWorkTransparent.png";
import errorJayden from "../assets/images/SurprisedTransparent.png";

const data = [
  {
    image: "angular",
    value: "Angular",
    label: "Angular",
  },
  {
    image: "assembly",
    value: "Assembly",
    label: "Assembly",
  },
  {
    image: "cplusplus",
    value: "C++",
    label: "C++",
  },
  {
    image: "css",
    value: "CSS",
    label: "CSS",
  },
  {
    image: "django",
    value: "Django",
    label: "Django",
  },
  {
    image: "html",
    value: "HTML",
    label: "HTML",
  },
  {
    image: "java",
    value: "Java",
    label: "Java",
  },
  {
    image: "javascript",
    value: "JavaScript",
    label: "JavaScript",
  },
  {
    image: "node",
    value: "Node.js",
    label: "Node.js",
  },
  {
    image: "other",
    value: "Other",
    label: "Other",
  },
  {
    image: "python",
    value: "Python",
    label: "Python",
  },
  {
    image: "r",
    value: "R",
    label: "R",
  },
  {
    image: "react",
    value: "React.js",
    label: "React.js",
  },
  {
    image: "ruby",
    value: "Ruby",
    label: "Ruby",
  },
  {
    image: "rust",
    value: "Rust",
    label: "Rust",
  },
  {
    image: "sql",
    value: "SQL",
    label: "SQL",
  },
  {
    image: "svelte",
    value: "Svelte",
    label: "Svelte",
  },
  {
    image: "swift",
    value: "Swift",
    label: "Swift",
  },
  {
    image: "typescript",
    value: "Typescript",
    label: "Typescript",
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
          firstImage={jayden1}
          secondImage={jayden2}
          timing={3000}
          error={technologies.error ? true : false}
          errorJayden={errorJayden}
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
