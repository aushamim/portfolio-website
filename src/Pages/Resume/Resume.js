import React from "react";
import "./Resume.css";
import resume from "../../Media/resume.png";
import { Box } from "@mui/system";
import { Link } from "@mui/material";

const Resume = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Box sx={{ width: { xs: "100%", lg: "60%" } }}>
        <img src={resume} alt="resume" style={{ width: "100%" }} />
      </Box>
      <Link
        id="gitBtn"
        sx={{ position: "fixed", right: 100, bottom: 100 }}
        href="https://drive.google.com/uc?export=download&id=17HzaAVTtH3NWGDVIqrWXogoUFh8yOYQh"
      >
        Download
      </Link>
    </Box>
  );
};

export default Resume;
