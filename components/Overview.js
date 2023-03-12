import React from "react";
import {
  Stack,
  Box,
  Typography,
  CardContent,
  AccordionDetails,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactHtmlParser from "react-html-parser";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import { Accordion, AccordionSummary } from "./MyAccordion";
import { MyCard } from "./MyCard";
import { MyChip } from "./MyChip";
import { Trail } from "./Trail";

import styles from "../styles/pages.module.css";

export default function Overview({
  goPrev,
  goNext,
  slide,
  name,
  idea,
  outline,
  technologies,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 5}>
          <span className={styles.major}>Project Overview</span>
        </Trail>
        <JaydenPrompt
          text={"I maked this for you? Does it look good?"}
          open={slide == 5}
        />
        <Stack spacing={3} className={styles.textbox}>
          <MyCard>
            <CardContent>
              <Typography variant="h6">Project Name</Typography>
              <Typography sx={{ color: "#ef8354" }} variant="h3">
                <b>{name}</b>
              </Typography>
            </CardContent>
          </MyCard>
          <MyCard>
            <CardContent component={Stack} spacing={1}>
              <Typography variant="h6">Project Idea</Typography>
              <Typography sx={{ color: "#ef8354" }} variant="h5">
                <b>{idea}</b>
              </Typography>
            </CardContent>
          </MyCard>
          <MyCard>
            <CardContent component={Stack} spacing={2}>
              <Typography variant="h6">Project Outline</Typography>
              <Stack>
                {outline.map((item, index) => (
                  <Accordion disableGutters elevation={0} key={index}>
                    <AccordionSummary>
                      <div>
                        <b>{`Stage ${index + 1}`}</b>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>{ReactHtmlParser(item)}</AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </CardContent>
          </MyCard>
          <MyCard>
            <CardContent component={Stack}>
              <Typography variant="h6">Tech Stack</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {technologies.map((item, index) => (
                  <MyChip
                    key={index}
                    label={item}
                    sx={{ mr: "1em", mt: "1em", color: "white" }}
                  />
                ))}
              </Box>
            </CardContent>
          </MyCard>
        </Stack>
        <PrevNext goPrev={goPrev} goNext={goNext} />
      </div>
    </div>
  );
}
