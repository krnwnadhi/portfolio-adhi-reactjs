import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Grid, Typography, Container, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGithub, FaGit } from "react-icons/fa";
import { SiJavascript, SiReactrouter, SiMaterialUi, SiMysql, SiNetlify, SiHeroku, SiZoom, SiSlack } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import img1 from "../images/html-css-javascript-lg.jpg";
import img2 from "../images/nodejs.jpg";
import img3 from "../images/mysql2.jpg";
import img4 from "../images/mern-stack.jpg";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  heading: {
    color: "lightgray",
    paddingBottom: "6rem",
    textTransform: "uppercase"
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <CssBaseline />
      <Navbar />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography variant="h4" align="center" className={classes.heading}>
            Tech skills
            </Typography>
          <Grid container spacing={8} >
            <Grid item xs={12} sm={8} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={img1}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" align="center" >
                    FRONT END
                    </Typography>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FaHtml5 />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="HTML5" />
                      <ListItemAvatar>
                        <Avatar>
                          <FaCss3Alt />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="CSS3" />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SiJavascript />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="JavaScript" />
                      <ListItemAvatar>
                        <Avatar>
                          <FaReact />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="React JS" />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SiReactrouter />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="React Router" />
                      <ListItemAvatar>
                        <Avatar>
                          <FaBootstrap />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Bootstrap" />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SiMaterialUi />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Material UI" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={img2}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" align="center" >
                    BACKEND
                    </Typography>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FaNodeJs />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Node JS" />
                      <ListItemAvatar>
                        <Avatar>
                          <FaNodeJs />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Express JS" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={img3}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" align="center" >
                    DATABASE
                    </Typography>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SiMysql />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="My SQL" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={img4}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" align="center" >
                    OTHER
                    </Typography>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FaGit />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Git" />
                      <ListItemAvatar>
                        <Avatar>
                          <FaGithub />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Github" />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SiNetlify />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Netlify" />
                      <ListItemAvatar>
                        <Avatar>
                          <SiHeroku />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Heroku" />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SiSlack />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Slack" />
                      <ListItemAvatar>
                        <Avatar>
                          <SiZoom />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Zoom" />
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AiFillApi />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Rest API" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
