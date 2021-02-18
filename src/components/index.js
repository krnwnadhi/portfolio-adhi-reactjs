import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particles: {
    position: "absolute",
    opacity: "0.5"
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particles}
        params={{
          particles: {
            number: {
              value: 84,
              density: {
                enable: true,
                value_area: 1800
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato"
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              }
            }
          }
        }}
      />
    </>
  );
};

export default Home;
