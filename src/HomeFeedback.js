import Grid from '@material-ui/core/Grid'
import React from 'react'
import './HomeFeedback.css'
import Carousel from 'react-material-ui-carousel'


function HomeFeedback() {

    const testimonies = [
        "I trusted them with my final year tech project and they came through",
        "The most affordable and skilled tech team I have come across so far",
        "Nicely done guys"
    ]
    return (
        <div className="homeFeedback">
            <h1>Feedback</h1>
            <div className="homeFeedback__grid">
                <Grid container spacing={8}>
                    <Grid item xs={12} lg={6}>
                        <h2 className="homeFeedback__customers">What are our</h2>
                        <h2 className="homeFeedback__customers"><span style={{color: 'yellow'}}>customers</span> saying?</h2>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Carousel
                            animation="slide"
                            interval={4000}
                            indicators={true}
                            IndicatorIcon={true}
                        >
                            {
                                testimonies.map((text, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="homeFeedback__carouselText"
                                        >
                                            <div>{text}</div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default HomeFeedback
