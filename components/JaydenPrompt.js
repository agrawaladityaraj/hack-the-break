import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

import jayden from "../assets/images/ThatCouldWorkTransparent.png";

export default function JaydenPrompt({ text, open }) {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    if (!visited && open) {
      setVisited(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Image src={jayden} alt="Jayden" height={400} width={400} />
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
