import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Projects.css";
import { Link as Link2 } from "react-router-dom";

const Projects = () => {
  return (
    <Box sx={{ padding: 10 }}>
      <Grid container spacing={2} sx={{ gridGap: "10px" }}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2">Some of my</Typography>
          <Typography variant="h2" sx={{ color: "#fca61f", fontWeight: 400 }}>
            Projects
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2, color: "#aaa" }}>
            These are some of the projects I have completed.
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}></Grid>

        <Grid item xs={12} md={10} className="project" sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Easy Travels
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  A simple website Where a user can book a Tour place to enjoy
                  his vacation.
                  <br />
                  <Typography variant="caption">
                    Built With: React, React Router, Bootstrap
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                • User can see his Booking Status. <br />
                • User can delete booking. <br />• An Admin can update Booking
                status.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Link
                  id="gitBtn"
                  href="https://easy-travels-a11.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </Link>
                <br />
                <Link
                  id="gitBtn"
                  href="https://github.com/aushamim/easy-travels-client"
                  target="_blank"
                >
                  GitHub
                </Link>
                <br />
                <Link2 id="gitBtn" to="/project1">
                  Details
                </Link2>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12} md={10} className="project" sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Cars BD
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  A place to get a dream car.
                  <br />
                  <Typography variant="caption">
                    Built With: React, React Router, Bootstrap
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                • User can buy a car. <br />
                • User can cancel an order. <br />• Admin can Add and Delete a
                Car.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Link
                  id="gitBtn"
                  href="https://cars-bd-a12.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </Link>
                <br />
                <Link
                  id="gitBtn"
                  href="https://github.com/aushamim/cars-bd-clientside"
                  target="_blank"
                >
                  GitHub
                </Link>
                <br />
                <Link2 id="gitBtn" to="/project2">
                  Details
                </Link2>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={10} className="project" sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Book Archive
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  A simple website to lookup information of any book.
                  <br />
                  <Typography variant="caption">
                    Built With: Javascript, Tailwind CSS
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                • User can search for any book. <br />• User will be able to
                view detailed information.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Link
                  id="gitBtn"
                  href="https://book-archive-a6.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </Link>
                <br />
                <Link
                  id="gitBtn"
                  href="https://github.com/aushamim/book-archive"
                  target="_blank"
                >
                  GitHub
                </Link>
                <br />
                <Link2 id="gitBtn" to="/project3">
                  Details
                </Link2>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12} md={10} className="project" sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Course Master
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  A Place To From Learn Great Minds
                  <br />
                  <Typography variant="caption">
                    Built With: React, React Router, Bootstrap
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom>
                Overview
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                • We offer a great variety of courses. <br />
                • User will get a Certificate at the end of a course. <br />•
                User will also receive a Badge to show off in their profile.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Link
                  id="gitBtn"
                  href="https://course-master-a9.netlify.app/"
                  target="_blank"
                >
                  Live Site
                </Link>
                <br />
                <Link
                  id="gitBtn"
                  href="https://github.com/aushamim/course-master"
                  target="_blank"
                >
                  GitHub
                </Link>
                <br />
                <Link2 id="gitBtn" to="/project4">
                  Details
                </Link2>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
