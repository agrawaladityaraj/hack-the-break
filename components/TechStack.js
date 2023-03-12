import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import MySelect from "./MySelect";
import { MyChip } from "./MyChip";
import { Trail } from "./Trail";

import styles from "../styles/pages.module.css";

import angular from "../assets/icons/angular.png";
import assembly from "../assets/icons/Assembly.png";
import cplusplus from "../assets/icons/cplusplus.png";
import css from "../assets/icons/css.png";
import django from "../assets/icons/django.png";
import html from "../assets/icons/html.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/js.png";
import node from "../assets/icons/node.png";
import other from "../assets/icons/other.png";
import python from "../assets/icons/python.png";
import r from "../assets/icons/R.png";
import react from "../assets/icons/reactjs.png";
import ruby from "../assets/icons/ruby.png";
import rust from "../assets/icons/rust.png";
import sql from "../assets/icons/sql.png";
import svelte from "../assets/icons/Svelte.png";
import swift from "../assets/icons/swift.png";
import typescript from "../assets/icons/typescript.png";

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
