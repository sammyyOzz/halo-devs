import Grid from '@material-ui/core/Grid'
import React from 'react'
import './AboutUs.css'
import useAnimate from './hooks/useAnimate';
import undrawImg from './images/undraw_interaction_design_odgc.svg'


function AboutUs() {
    
    //hook import responsible for animation
    useAnimate()

    return (
        <div className="about">
            <div className="about__top">
                <Grid container>
                    <Grid item container xs={12} md={6} className="about__topGrid">
                       <Grid item xs={1} md={3} />
                       <Grid item xs={10} md={9}>
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
                       <Grid item xs={1} md={3} />
                    </Grid>
                    <Grid item xs={12} md={6} className="about__topGrid">
                        <img src={undrawImg} alt="HaloDevs" data-aos="flip-right" />
                    </Grid>
                </Grid>
            </div>
            <div className="about__box">
                <h1>About Us</h1>
                <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <p className="about__boxText">Our team, we pride ourselves in delivering the most exquisite and elegant products for all our clients. In simplicity lies perfection, so we make it our priority to keep our products simple but state-of-the-art. </p>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </div>
        </div>
    )
}

export default AboutUs
