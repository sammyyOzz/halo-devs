import Grid from '@material-ui/core/Grid'
import React, { useState, useEffect } from 'react'
import './HomePortfolio.css'
import driftHub from './images/driftHub.png'
import marketier from './images/marketier2.jpeg'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import axios from './axios'
import Skeleton from '@material-ui/lab/Skeleton';
import  { Fade } from 'react-reveal'

function HomePortfolio() {

    const [jobs, setJobs] = useState([])
    const [loader, setLoader] = useState(true)
    const [err, setErr] = useState(false)

    const url = "/api/job"

    useEffect(() => {
        const fetchPortfolio = () => {
            axios.get(url)
            .then(res => {
                setJobs(res.data)
                setLoader(false)
            })
            .catch(() => {
                setErr(true)
                setLoader(false)
            })
        }

        fetchPortfolio()
    }, [])

    const openProjectInNewWindow = url => {
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <div className="homePortfolio">
            <h1>Our Portfolio</h1>
            <div className="homePortfolio__content">
                {
                    jobs && 
                    <Fade bottom duration={2000} distance="150px">
                        <Grid container spacing={7}>
                            {
                                jobs.map(job => (
                                    <Grid item xs={12} md={6} key={job?.id}>
                                        <div className="homePortfolio__app">
                                            <h2>{job?.name}</h2>
                                            <Grid item container>
                                                <Grid item xs={6}>
                                                    <div className="homePortfolio__appDescription">
                                                        {job?.description}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <img className="homePortfolio__img" src={driftHub} alt=""/>
                                                </Grid>
                                            </Grid>
                                            <button 
                                                className="homePortfolio__btn"
                                                // onClick={() => openProjectInNewWindow(link.url)}
                                            >
                                                View Project
                                            </button>
                                        </div>
                                    </Grid>
                                
                                ))
                            }
                        </Grid>
                    </Fade>
                }

                {
                    loader &&
                    <Grid container spacing={10}>
                        {
                            Array(4).fill().map(() => (
                                <Grid item xs={12} md={6}>
                                    <Skeleton height={40}/>
                                    <Grid item container spacing={10}>
                                        <Grid item xs={8}>
                                            <Skeleton height={60} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Skeleton height={60} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                }

                {
                    err && 
                    <div className="homePortfolio__err">
                        <ErrorOutlineIcon fontSize="large" />
                        <span>Sorry, a problem occured while loading the resource. Please check your network settings</span>
                    </div>
                }

                
            </div>
        </div>
    )
}

export default HomePortfolio
