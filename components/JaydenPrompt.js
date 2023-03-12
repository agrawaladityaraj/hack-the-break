import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

import jayden from "../assets/images/ThatCouldWorkTransparent.png";

export default function JaydenPrompt({ text, open }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Image src={jayden} alt="Jayden" height={400} width={400} />
      </Box>
      {open && (
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
