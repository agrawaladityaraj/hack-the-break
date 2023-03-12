import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

import pokedJayden from "../assets/images/angry2.png";

export default function JaydenPrompt({
  text,
  open,
  firstImage,
  secondImage,
  timing,
  error,
  errorJayden,
}) {
  const [visited, setVisited] = useState(false);
  const [first, setFirst] = useState(true);
  const [poked, setPoked] = useState(false);

  useEffect(() => {
    if (!visited && open) {
      setVisited(true);
      setTimeout(() => {
        setFirst(false);
      }, timing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    setTimeout(() => {
      setPoked(false);
    }, 500);
  }, [poked]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Tooltip title="Do not poke me!">
          <Image
            src={
              poked
                ? pokedJayden
                : error
                ? errorJayden
                : first
                ? firstImage
                : secondImage
            }
            alt="Jayden"
            height={400}
            width={400}
            onClick={() => {
              if (!poked) {
                setPoked(true);
              }
            }}
            style={{ cursor: "pointer" }}
          />
        </Tooltip>
      </Box>
      {visited && (
        <TypeAnimation
          style={{ padding: "2rem", fontSize: "1.5rem" }}
          sequence={[text]}
          wrapper={Box}
          cursor
        />
      )}
    </Box>
  );
}
