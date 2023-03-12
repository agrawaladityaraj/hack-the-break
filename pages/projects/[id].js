import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SwipeableViews from "react-swipeable-views";
import { createClient } from "@supabase/supabase-js";

import Welcome from "../../components/Welcome";
import Name from "../../components/Name";
import Idea from "../../components/Idea";
import Outline from "../../components/Outline";
import TechSack from "../../components/TechStack";
import Overview from "../../components/Overview";

const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Project() {
  const router = useRouter();
  const { id } = router.query;
  const [slide, setSlide] = useState(0);
  const [name, setName] = useState({ value: "", error: "" });
  const [idea, setIdea] = useState({ value: "", error: "" });
  const [outline, setOutline] = useState({
    value: [],
    error: "",
  });
  const [technologies, setTechnologies] = useState({ value: [], error: "" });

  useEffect(() => {
    async function fetchProject() {
      (async () => {
        try {
          let res = await supabase.from("projects").select().eq("id", id);
          console.log(res);
          if (res.data.length) {
            setName({ value: res.data[0].name, error: "" });
            setIdea({ value: res.data[0].idea, error: "" });
            setOutline({ value: res.data[0].outline, error: "" });
            setTechnologies({ value: res.data[0].technologies, error: "" });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
    if (id) {
      fetchProject();
    }
  }, [id]);

  const submitProject = async () => {
    try {
      await supabase
        .from("projects")
        .update([
          {
            name: name.value,
            idea: idea.value,
            outline: outline.value,
            technologies: technologies.value,
          },
        ])
        .eq("id", id);
      router.push("/projects");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SwipeableViews
      style={{ margin: 0, padding: 0, height: "100vh", width: "100vw" }}
      index={slide}
      springConfig={{
        duration: "0.8s",
        delay: "0.3s",
        easeFunction: "cubic-bezier(0.18, 0.3, 0.25, 1)",
      }}
    >
      <Welcome goNext={() => setSlide(1)} slide={slide} edit />
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
  );
}
