import React from "react";
import { Grid, Stack, Box } from "@mui/material";

const GridLoader = () => {
  return (
    <Grid sx={{ mt: "1em" }} container spacing={3}>
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <Grid item key={item} md={4} sm={6} xs={12}>
          <Stack spacing={2}>
            <Box sx={{ minHeight: 180 }} className="loading-animation"></Box>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridLoader;
