import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SwipeableViews from "react-swipeable-views";
import { createClient } from "@supabase/supabase-js";

import Welcome from "../components/Welcome";
import Name from "../components/Name";
import Idea from "../components/Idea";
import Outline from "../components/Outline";
import TechSack from "../components/TechStack";
import Overview from "../components/Overview";

const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Home() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const [name, setName] = useState({ value: "", error: "" });
  const [idea, setIdea] = useState({ value: "", error: "" });
  const [outline, setOutline] = useState({
    value: [],
    error: "",
  });
  const [technologies, setTechnologies] = useState({ value: [], error: "" });

  const submitProject = async () => {
    try {
      await supabase.from("projects").insert([
        {
          name: name.value,
          idea: idea.value,
          outline: JSON.stringify(outline.value),
          technologies: JSON.stringify(technologies.value),
        },
      ]);
      router.push("/projects");
    } catch (error) {
      console.error(error);
    }
  };

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
          goNext={() => {
            if (!name.value) {
              setName({ ...name, error: "Name cannot be empty!" });
            } else {
              setSlide(2);
            }
          }}
          slide={slide}
          name={name}
          setName={setName}
        />
        <Idea
          goPrev={() => setSlide(1)}
          goNext={() => {
            if (!idea.value) {
              setIdea({
                ...idea,
                error: "I said no funny business, idea cannot be empty!",
              });
            } else {
              setSlide(3);
            }
          }}
          slide={slide}
          idea={idea}
          setIdea={setIdea}
        />
        <Outline
          goPrev={() => setSlide(2)}
          goNext={() => {
            if (!outline.value.length) {
              setOutline({
                ...outline,
                error: "You need atleast one stage! *Sigh*",
              });
            } else {
              setSlide(4);
            }
          }}
          slide={slide}
          outline={outline}
          setOutline={setOutline}
        />
        <TechSack
          goPrev={() => setSlide(3)}
          goNext={() => {
            if (!technologies.value.length) {
              setTechnologies({
                ...technologies,
                error: "C'mon! You're gonna need atleast one technology!",
              });
            } else {
              setSlide(5);
            }
          }}
          slide={slide}
          technologies={technologies}
          setTechnologies={setTechnologies}
        />
        <Overview
          goPrev={() => setSlide(4)}
          goNext={submitProject}
          slide={slide}
          name={name.value}
          idea={idea.value}
          outline={outline.value}
          technologies={technologies.value}
        />
      </SwipeableViews>
    </>
  );
}
