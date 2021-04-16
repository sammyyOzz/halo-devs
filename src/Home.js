import React, { useEffect } from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid'
import haloMoon from './images/halo-moon.svg'
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import "aos/dist/aos.css";


const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
        flexDirection: 'column-reverse'
    }
  }
}));

function Home() {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="home">
            <div className="home__top">
                <Grid container className={classes.mainContainer}>
                    <Grid item xs={12} md={5} className="home__topGrid">
                       <div className="home__topGridContent" data-aos="fade-right">
                            <h1 style={{fontSize: '80px'}}>We build</h1>
                            <span id="home__relax">You relax.</span><br />
                            <span id="home__hireExperts">
                                Hire experts & 
                            </span><br />
                            <div id="home__hireExpertsII">
                                get your job done!
                            </div>
                       </div>
                       <button>Get in touch</button>
                    </Grid>
                    <Grid item xs={12} md={7} className="home__topGrid">
                        <img src={haloMoon} alt="HaloDevs" data-aos="flip-right" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home
