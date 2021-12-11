import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Self.css";
import avatar from "../../Media/avatar.jpg";

const Self = () => {
  return (
    <Box className="self">
      <Grid container spacing={2} sx={{ padding: 10 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h2">Hi! I Am</Typography>
          <Typography variant="h2" sx={{ color: "#fca61f", fontWeight: 400 }}>
            Amzud Uddin Shamim
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2, color: "#aaa" }}>
            I am a juniour web developer. <br /> I specialize in ReactJS,
            various CSS frameworks like, Bootstrap, Tailwind CSS, Material UI.
          </Typography>
          <Box sx={{ marginTop: 3 }}>
            <Link href="/contact">Hire Me</Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <img id="avatar" src={avatar} alt="Avatar" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Self;
