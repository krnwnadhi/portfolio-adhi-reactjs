import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box, Link, IconButton, Tooltip } from "@material-ui/core";
import Navbar from "./Navbar";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray",
      },
      "&:hover fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "lightgray",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Description"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
          >
            submit
          </Button>
          <br /> <br />
          <Tooltip title="Github">
            <IconButton size="medium" >
              <Link href="https://github.com/krnwnadhi" target="_blank" rel="noopener noreferrer" underline="none" >
                <GitHubIcon htmlColor="#F7F7F7" fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook">
            <IconButton size="medium" >
              <Link href="http://facebook.com/adhikurniawan13" target="_blank" rel="noopener noreferrer" underline="none" >
                <FacebookIcon htmlColor="#F7F7F7" fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton size="medium" >
              <Link href="https://www.instagram.com/adhi_krnwn/" target="_blank" rel="noopener noreferrer" underline="none" >
                <InstagramIcon htmlColor="#F7F7F7" fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton size="medium" >
              <Link href="https://www.linkedin.com/in/adhikrnwn/" target="_blank" rel="noopener noreferrer" underline="none" >
                <LinkedInIcon htmlColor="#F7F7F7" fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
          <Tooltip title="adhikurniawan2108@gmail.com">
            <IconButton size="medium" >
              <Link href="mailto:adhikurniawan2108@gmail.com" target="_blank" rel="noopener noreferrer" underline="none" >
                <MailIcon htmlColor="#F7F7F7" fontSize="large" />
              </Link>
            </IconButton>
          </Tooltip>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
