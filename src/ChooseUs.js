import Grid from '@material-ui/core/Grid'
import React from 'react'
import './ChooseUs.css'
import chooseUsImg from './images/gettyimages-621272078-612x612.jpg'

function ChooseUs() {
    return (
        <div className="chooseUs">
            <Grid container>
                <Grid item container xs={12} md={6}>
                    <Grid item xs={2} />
                    <Grid item xs={8} className="chooseUs__grid">
                        <h1>Value is a product of choice !</h1>
                        <h2>so why choose us ?</h2>
                        <p>We believe that by our focus in developing cutting edge technologies and services will bring about major technological advancement in sub-saharan Africa and to the world generally. </p>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <Grid item container xs={12} md={6}>
                    <Grid item xs={2} />
                    <Grid item xs={8} className="chooseUs__gridImg">
                       <img src={chooseUsImg} alt=""/>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ChooseUs
