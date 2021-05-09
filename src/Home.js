import React from 'react'
import './Home.css'
import Grid from '@material-ui/core/Grid'
import haloMoon from './images/halo-moon.svg'
import { makeStyles } from '@material-ui/core/styles';
import useAnimate from './hooks/useAnimate';


const useStyles = makeStyles((theme) => ({
    gridImg: {
        maxWidth: '55%',
        height: 'auto'
    },
    smScreenText: {
        display: 'none',
        textAlign: 'center',
        marginTop: '25px'
    },
    smCenterText: {
        margin: '10px 0px'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        },
        lgScreenText: {
            display: 'none'
        },
        smScreenText: {
            display: 'block',
        }
        
    }
}));

function Home() {
    const classes = useStyles();

    //hook import responsible for animation
    useAnimate()

    return (
        <div className="home">
            {/* <div className="home__topPad" /> */}
            <div className="home__top">
                <Grid container className={classes.mainContainer}>
                    <Grid item xs={12} md={5} className="home__topGrid">
                       <div className={classes.lgScreenText} data-aos="fade-right">
                            <h1 style={{fontSize: '80px'}}>We build</h1>
                            <span id="home__relax">You relax.</span><br />
                            <span id="home__hireExperts">
                                Hire experts & 
                            </span><br />
                            <div id="home__hireExpertsII">
                                get your job done!
                            </div>
                       </div>
                       <div className={classes.smScreenText}>
                            <h1>We build, you relax.</h1>
                            <h3 className={classes.smCenterText}>Hire experts &</h3>
                            <h3>Get your job done.</h3>
                       </div>
                       <button>Get in touch</button>
                    </Grid>
                    <Grid item xs={12} md={7} className="home__topGrid">
                        <img 
                            src={haloMoon} 
                            alt="HaloDevs" 
                            data-aos="flip-right"
                            // className={classes.gridImg}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home
