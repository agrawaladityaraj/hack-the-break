import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Welcome() {
  const [props, api] = useSpring(
    () => ({
      from: { fontSize: "0px" },
      to: { fontSize: "10vw" },
    }),
    []
  );

  return (
    <Box sx={{ width: "100%" }}>
      {/* <animated.div style={{ fontFamily: "Larsseit-ExtraBold" }}>
        Welcome to Project Buddy!
      </animated.div> */}
      <animated.div style={{ fontFamily: "Larsseit-ExtraBold" }}>
        Welcome to Project Buddy!
      </animated.div>
    </Box>
  );
}
