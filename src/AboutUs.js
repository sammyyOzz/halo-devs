import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import React from 'react'
import './AboutUs.css'
import useAnimate from './hooks/useAnimate';
import undrawImg from './images/undraw_interaction_design_odgc.svg'


const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
      mainContainer: {
          flexDirection: 'column-reverse'
      }
    }
  }));

function AboutUs() {
    const classes = useStyles();

    //hook import responsible for animation
    useAnimate()

    return (
        <div className="about">
            <div className="about__top">
                <Grid container className={classes.mainContainer}>
                    <Grid item container xs={12} md={6} className="about__topGrid">
                       <Grid item xs={3} />
                       <Grid item xs={9}>
                            <div className="about__topGridContent" data-aos="fade-right">
                                <span id="about__hireExperts">                              
                                    Connect with experts, build
                                    and manage your 
                                </span><br />
                                <div id="about__hireExpertsII">
                                    business/projects
                                </div>
                            </div>
                       </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} className="about__topGrid">
                        <img src={undrawImg} alt="HaloDevs" data-aos="flip-right" />
                    </Grid>
                </Grid>
            </div>
            <div className="about__box">
                <h1>About Us</h1>
                <p>Our team, we pride ourselves in delivering the most exquisite and elegant products for all our clients. In simplicity lies perfection, so we make it our priority to keep our products simple but state-of-the-art. </p>
            </div>
        </div>
    )
}

export default AboutUs
