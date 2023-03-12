import React from "react";
import {
  Stack,
  Box,
  Typography,
  CardContent,
  AccordionDetails,
} from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DoneIcon from "@mui/icons-material/Done";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import { Accordion, AccordionSummary } from "./MyAccordion";
import { MyCard } from "./MyCard";
import { MyChip } from "./MyChip";
import { Trail } from "./Trail";
import { MyButton } from "./MyButton";

import styles from "../styles/pages.module.css";
import jayden1 from "../assets/images/ShockedTransparent.png";
import jayden2 from "../assets/images/PontificateTransparent.png";
import errorJayden from "../assets/images/SeriousTransparent.png";
import { ErrorRounded } from "@mui/icons-material";

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
          firstImage={jayden1}
          secondImage={jayden2}
          timing={3000}
          error={false}
          errorJayden={errorJayden}
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
            startIcon={<ArrowBackIosIcon />}
            disableElevation
            onClick={goPrev}
          >
            Previous
          </MyButton>
          <MyButton
            variant="contained"
            endIcon={<DoneIcon />}
            disableElevation
            onClick={goNext}
          >
            Finish
          </MyButton>
        </Box>
      </div>
    </div>
  );
}
