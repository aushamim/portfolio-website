import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import "./ContactMe.css";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_25pns9h",
        "template_v5pjzz7",
        e.target,
        "user_R6iQWpE227RouoOqP4LEP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: { xs: "100%", lg: "80%" } },
        padding: 10,
        margin: { xs: "0", lg: "0 100px 0 100px" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={sendEmail}
    >
      <Typography variant="h6" sx={{ color: "#aaa" }}>
        Leave a message to me.
      </Typography>
      <TextField
        id="outlined-basic"
        required
        label="Name"
        name="name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        required
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        required
        multiline
        rows={5}
        label="Message"
        name="message"
        variant="outlined"
      />
      <Button variant="contained" type="submit" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  );
};

export default ContactMe;
