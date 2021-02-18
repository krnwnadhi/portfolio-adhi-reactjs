import React from 'react'
import Navbar from './Navbar'
import { makeStyles } from "@material-ui/core/styles";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork } from "react-icons/md";
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "auto",
    },
    heading: {
        color: "lightgray",
        padding: "6rem 0",
        textTransform: "uppercase"
    },
});

const ExperienceEducation = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    work experience & previous education
                </Typography>
                <VerticalTimeline >
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(255,0,0)' }}
                    />
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2020 - 2021"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h2 className="vertical-timeline-element-title">Fullstack Javascript</h2>
                        <h3 className="vertical-timeline-element-subtitle">Online Course, Bandung</h3>
                        <p>
                            ( <i>Non Formal</i> ) Sept 2020 - Feb 2020,
                            online course Fullstack Javascript at sekolahfullstack.com by PT. Cilsy Fiolution.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2012 - 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h2 className="vertical-timeline-element-title">Computer Engineering</h2>
                        <h3 className="vertical-timeline-element-subtitle">South Sumatera</h3>
                        <p>
                            Bachelor Degree of Computer Engineering in Sriwijaya University, Palembang, South Sumatera.
                        </p>
                        <p style={{ fontSize: "14px", fontStyle: "italic" }}>GPA : 3.11 ( Scale 4 )</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        className="vertical-timeline-element--work"
                        date="Des 2014 - Jan 2015"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h2 className="vertical-timeline-element-title">Internship</h2>
                        <h3 className="vertical-timeline-element-subtitle">Tanjung Enim, South Sumatera</h3>
                        <p>
                            Internship Program - Network Division Office PT Bukit Asam Tbk ( December 2014 - January 2015 )
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2009 - 2012"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h2 className="vertical-timeline-element-title">Senior Highschool</h2>
                        <h3 className="vertical-timeline-element-subtitle">West Sumatera</h3>
                        <p>
                            Senior High School in SMA Negeri 02 Solok, West Sumatera
                        </p>
                    </VerticalTimelineElement>
                    {/*  */}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    />
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default ExperienceEducation


