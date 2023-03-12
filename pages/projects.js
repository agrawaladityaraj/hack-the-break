import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import { Grid, Stack, Box, Typography } from "@mui/material";

import { Trail } from "../components/Trail";
import GridLoader from "../components/GridLoader";

import styles from "../styles/pages.module.css";

// const supabase = createClient(process.env.BACKEND_URL, process.env.API_KEY);

export default function Projects() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchProjects() {
      const supabase = createClient(
        process.env.BACKEND_URL,
        process.env.API_KEY
      );
      (async () => {
        try {
          let res = await supabase.from("projects").select("*");
          setProjects(res.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      })();
    }
    fetchProjects();
  }, []);

  return (
    <div style={{ width: "100%" }} className={styles.container}>
      <div style={{ width: "100%" }} className={styles.verticalCentre}>
        <Trail open={true}>
          <span className={styles.major}>Projects Board</span>
        </Trail>
        {loading ? (
          <GridLoader />
        ) : (
          <Grid sx={{ mt: "1em" }} container spacing={3}>
            {projects.map((item) => (
              <Grid item key={item.id} md={4} sm={6} xs={12}>
                <Stack spacing={2}>
                  <Box
                    component={Link}
                    href={`/projects/${item.id}`}
                    sx={{
                      minHeight: 180,
                      width: "100%",
                      height: "100%",
                      color: "black",
                      backgroundColor: "#ef8354",
                      boxShadow: "10px 10px black",
                      textDecoration: "none",
                    }}
                  >
                    <Typography variant="h4">
                      <b style={{ textDecoration: "none" }}>{item.name}</b>
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
            <Grid item md={4} sm={6} xs={12}>
              <Stack spacing={2}>
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    minHeight: 180,
                    width: "100%",
                    height: "100%",
                    color: "#FFF4EC",
                    backgroundColor: "#52796F",
                    boxShadow: "10px 10px black",
                    textDecoration: "none",
                  }}
                >
                  <Typography variant="h4">
                    <b style={{ textDecoration: "none" }}>Add Project</b>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
}
