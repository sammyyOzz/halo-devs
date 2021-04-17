import Grid from '@material-ui/core/Grid'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <h4>Owerri, Imo state, Nigeria</h4>
            <Grid container>
                <Grid item xs={6}>
                    <span style={{color: 'yellow'}}>Contact Us:</span>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={12} md={6}>
                        +234 813 253 2887
                    </Grid>
                    <Grid item xs={12} md={6}>
                        +234 903 632 9918
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
