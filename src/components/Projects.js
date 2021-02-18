import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from "@material-ui/core/styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Divider, Link, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  headTitle: {
    color: "lightgray",
    padding: "6rem 0",
    textTransform: "uppercase"
  },
  accordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.headTitle}>
          Check out some of my projects
          </Typography>
        <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <Typography variant="h5" gutterBottom align="center" className="vertical-timeline-element-title">Cilvies</Typography>
            <img src={require('../images/cilvies.png')} alt="cilvies" width="100%" height="auto" />
            <br /><br />
            <div className={classes.accordion}>
              <Accordion square >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="primary" className={classes.heading}>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" align="justify" >
                    CILVIES is a DVD Movies website based on Create Read Update Delete (CRUD). This is a <a href="http://sekolahfullstack.com" target="_blank" rel="noopener noreferrer">sekolahfullstack.com</a> project by Cilsy Fiolution online bootcamp.
                    <br /> <br />
                    <div className={classes.root}>
                      <Chip size="small" label="React JS" />
                      <Chip size="small" label="React Router" />
                      <Chip size="small" label="Node JS" />
                      <Chip size="small" label="Express JS" />
                      <Chip size="small" label="Sequelize" />
                      <Chip size="small" label="MySQL" />
                      <Chip size="small" label="Material UI" />
                      <Chip size="small" label="Responsive" />
                    </div>
                  </Typography>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Link href="https://github.com/krnwnadhi/cilvies-react" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small"> Source Code </Button>
                  </Link>
                  <Link href="https://cilvies.netlify.app" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small" color="primary"> Demo </Button>
                  </Link>
                </AccordionActions>
              </Accordion>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <Typography variant="h5" gutterBottom align="center" className="vertical-timeline-element-title">Todo App</Typography>
            <img src={require('../images/todo.png')} alt="cilvies" width="100%" height="auto" />
            <br /><br />
            <div className={classes.accordion}>
              <Accordion square >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="primary" className={classes.heading}>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" align="justify" >
                    Todo app based on Create Read Update Delete (CRUD).
                    <br /> <br />
                    <div className={classes.root}>
                      <Chip size="small" label="HTML5" />
                      <Chip size="small" label="CSS3" />
                      <Chip size="small" label="Javascript ES6" />
                      <Chip size="small" label="React JS" />
                      <Chip size="small" label="Bootstrap" />
                      <Chip size="small" label="Responsive" />
                    </div>
                  </Typography>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Link href="https://github.com/krnwnadhi/small-project-2-todo-list" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small"> Source Code </Button>
                  </Link>
                  <Link href="https://todo-app-adhi.netlify.app/" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small" color="primary"> Demo </Button>
                  </Link>
                </AccordionActions>
              </Accordion>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <Typography variant="h5" gutterBottom align="center" className="vertical-timeline-element-title">Landing Page</Typography>
            <img src={require('../images/landingpage.png')} alt="cilvies" width="100%" height="auto" />
            <br /><br />
            <div className={classes.accordion}>
              <Accordion square >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="primary" className={classes.heading}>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" align="justify" >
                    Landing page website inspired by <a href="https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A/featured" target="_blank" rel="noopener noreferrer" >Brian Design</a>
                    <br /> <br />
                    <div className={classes.root}>
                      <Chip size="small" label="React JS" />
                      <Chip size="small" label="React Router" />
                      <Chip size="small" label="Styled Components" />
                    </div>
                  </Typography>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Link href="https://github.com/krnwnadhi/react-router-landing-page" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small"> Source Code </Button>
                  </Link>
                  <Link href="https://landing-page-adhi.netlify.app/" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small" color="primary"> Demo </Button>
                  </Link>
                </AccordionActions>
              </Accordion>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

          >
            <Typography variant="h5" gutterBottom align="center" className="vertical-timeline-element-title">Slicing website</Typography>
            <img src={require('../images/slicing.png')} alt="cilvies" width="100%" height="auto" />
            <br /><br />
            <div className={classes.accordion}>
              <Accordion square >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography color="primary" className={classes.heading}>Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="caption" align="justify" >
                    Website slicing from figma
                    <br /> <br />
                    <div className={classes.root}>
                      <Chip size="small" label="HTML5" />
                      <Chip size="small" label="CSS3" />
                      <Chip size="small" label="JavaScript" />
                    </div>
                  </Typography>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Link href="https://github.com/krnwnadhi/small-project-1" target="_blank" rel="noopener noreferrer" underline="none" >
                    <Button size="small"> Source Code </Button>
                  </Link>
                  <Button disabled size="small" color="primary"> Demo </Button>
                </AccordionActions>
              </Accordion>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Projects


