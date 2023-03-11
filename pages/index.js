import React, { useState } from "react";
import Head from "next/head";
import SwipeableViews from "react-swipeable-views";

import Welcome from "../components/Welcome";

export default function Home() {
  const [slide, setSlide] = useState(0);

  return (
    <>
      <Head>
        <title>Project Buddy</title>
        <meta name="description" content="Project buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwipeableViews
        style={{ margin: 0, padding: 0, height: "100vh", width: "100vw" }}
        index={slide}
      >
        <Welcome />
      </SwipeableViews>
    </>
  );
}
