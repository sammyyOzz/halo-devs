import Grid from '@material-ui/core/Grid'
import React from 'react'
import './HomePortfolio.css'
import driftHub from './images/driftHub.png'
import marketier from './images/marketier2.jpeg'

function HomePortfolio() {
    return (
        <div className="homePortfolio">
            <h1>Our Portfolio</h1>
            <div className="homePortfolio__content">
                <Grid container spacing={10}>
                    <Grid item xs={12} lg={6}>
                        <div className="homePortfolio__app">
                            <h2>Drift Hub Application</h2>
                            <Grid item container>
                                <Grid item xs={6}>
                                    <div className="homePortfolio__appDescription">
                                        Transportation within Nigeria just got way easier
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <img className="homePortfolio__img" src={driftHub} alt=""/>
                                </Grid>
                            </Grid>
                        </div>
                        
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <div className="homePortfolio__app">
                            <h2>Marketier</h2>
                            <Grid item container>
                                <Grid item xs={6}>
                                    <div className="homePortfolio__appDescription">
                                        Purchase affordable products sold by students around you
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <img className="homePortfolio__img" src={marketier} alt=""/>
                                </Grid>
                            </Grid>
                        </div>
                        
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default HomePortfolio
