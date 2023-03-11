import React, { useState } from "react";
import Head from "next/head";
import Carousel from "react-simply-carousel";

import Welcome from "../components/Welcome";

export default function Home() {
  const [slide, setSlide] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Project buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main sx={{ m: 0, p: 0 }}>

      </main> */}
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            margin: 0,
            padding: 0,
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={slide}
        activeSlideProps={{
          style: {
            background: "blue",
            width: "100vw",
            height: "100vh",
          },
        }}
        onRequestChange={setSlide}
        forwardBtnProps={{
          style: {
            display: "none",
          },
        }}
        backwardBtnProps={{
          style: {
            display: "none",
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        <div>Jeeho Oppa</div>
        <div>Jayden Oppa</div>
      </Carousel>
    </>
  );
}
