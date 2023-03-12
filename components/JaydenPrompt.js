import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

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

  useEffect(() => {
    if (!visited && open) {
      setVisited(true);
      setTimeout(() => {
        setFirst(false);
      }, timing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Image
          src={error ? errorJayden : first ? firstImage : secondImage}
          alt="Jayden"
          height={400}
          width={400}
        />
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
