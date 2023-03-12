import React from "react";
import { Stack, AccordionDetails, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import RTE from "./RTE";
import { Trail } from "./Trail";
import { MyTextField } from "./MyTextField";
import { MyButton } from "./MyButton";
import { Accordion, AccordionSummary } from "./MyAccordion";

import styles from "../styles/pages.module.css";

export default function Outline({
  goPrev,
  goNext,
  slide,
  outline,
  setOutline,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 3}>
          <span className={styles.major}>Project Outline?</span>
        </Trail>
        <JaydenPrompt
          text={
            "Ah okay, that works I guess. I’ve heard worse. What steps are you taking to complete this project? When you want to add a stage, press “Add stage”. When you’re done, hit “Next”!"
          }
          open={slide == 3}
        />
        <Stack spacing={3} className={styles.textbox}>
          {!outline.value.length && (
            <h4 style={{ textAlign: "center" }}>
              <b>
                No stages! What are you doing??? That’s like trying to walk
                without taking any steps!
              </b>
            </h4>
          )}
          <Stack>
            {outline.value.map((item, index) => (
              <Accordion disableGutters elevation={0} key={index}>
                <AccordionSummary>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <b>{`Stage ${index + 1}`}</b>
                    <IconButton
                      style={{ color: "white" }}
                      onClick={() => {
                        setOutline({
                          ...outline,
                          value: [
                            ...outline.value.slice(0, index),
                            ...outline.value.slice(
                              index + 1,
                              outline.value.length
                            ),
                          ],
                        });
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <RTE
                    content={item}
                    setContent={(content) =>
                      setOutline({
                        ...outline,
                        value: [
                          ...outline.value.slice(0, index),
                          content,
                          ...outline.value.slice(
                            index + 1,
                            outline.value.length
                          ),
                        ],
                      })
                    }
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
          <MyButton
            style={{ color: "white" }}
            startIcon={<AddIcon />}
            fullWidth
            onClick={() =>
              setOutline({ error: "", value: [...outline.value, ""] })
            }
          >
            Add Stage
          </MyButton>
          {outline.error && (
            <Typography color="error" variant="subtitle2">
              {outline.error}
            </Typography>
          )}
        </Stack>
        <PrevNext goPrev={goPrev} goNext={goNext} />
      </div>
    </div>
  );
}
