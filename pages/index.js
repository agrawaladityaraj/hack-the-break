import React, { useState } from "react";
import Head from "next/head";
import SwipeableViews from "react-swipeable-views";

import Welcome from "../components/Welcome";
import Name from "../components/Name";

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [name, setName] = useState({ value: "", error: "" });

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
        springConfig={{
          duration: "0.8s",
          delay: "0.3s",
          easeFunction: "cubic-bezier(0.18, 0.3, 0.25, 1)",
        }}
      >
        <Welcome goNext={() => setSlide(1)} slide={slide} />
        <Name
          goPrev={() => setSlide(0)}
          goNext={() => setSlide(2)}
          slide={slide}
          name={name}
          setName={setName}
        />
      </SwipeableViews>
    </>
  );
}
