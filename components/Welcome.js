import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import axios from "axios";
import { useSpring, animated, useTrail, a } from "@react-spring/web";
import { createClient } from "@supabase/supabase-js";

import styles from "../styles/welcome.module.css";

const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Welcome() {
  const [props, api] = useSpring(
    () => ({
      from: { fontSize: "0px" },
      to: { fontSize: "10vw" },
    }),
    []
  );

  return (
    <div className={styles.container}>
      <Trail open={true}>
        <span>Welcome to</span>
        <span className={styles.major}>Project</span>
        <span className={styles.major}>Buddy</span>
      </Trail>
    </div>
  );
}
