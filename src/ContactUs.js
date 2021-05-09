import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react'
import './ContactUs.css'

function ContactUs() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        // axios.post('', contact)
        // .then(() => alert('successfully sent'))
        // .catch(() => alert('sorry, there was a problem completing the action'))
        // setContact({ ...contact, name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="contactUs">
            <h2>Contact Us</h2>
            <h1>Send us an email today</h1>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <p className="contactUs__Text">Feel free to contact us anytime. We will get back to you as soon as we can.</p>
                </Grid>
                <Grid item md={5} />
            </Grid>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <div className="contactUs__form">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name"
                                value={contact.name}
                                onChange={ e => setContact({...contact, name: e.target.value})}
                            />
                            <input type="email" placeholder="Email"
                                value={contact.email}
                                onChange={ e => setContact({...contact, email: e.target.value})}
                            />
                            <input type="text" placeholder="Subject"
                                value={contact.phone}
                                onChange={ e => setContact({...contact, subject: e.target.value})}
                            />
                            <textarea placeholder="Message" value={contact.message}
                                onChange={ e => setContact({...contact, message: e.target.value})}>
                            </textarea>
                            <button><h3>send</h3></button>
                        </form>
                    </div>
                </Grid> 
                <Grid item container xs={12} md={5} className="contactUs__info">
                    <div className="contactUs__infoYellowBox" />
                    <Grid item xs={2} />
                    <Grid item xs={8} className="contactUs__infoContent">
                        <div>
                            <h1>Info</h1>
                            <div>contact@halodevs.org</div>
                        </div>
                        <div>
                            <div style={{color: 'yellow'}}>Phone:</div>
                            <div>+234 813 253 2887</div>
                            <div>+234 903 632 9918</div>
                        </div>
                        <div>
                            <div style={{color: 'yellow'}}>Location: </div>
                            <div>Owerri, Imo State, Nigeria</div>
                        </div>
                    </Grid>
                    <Grid item xs={2} />
                    <div className="contactUs__infoYellowBoxII" />
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactUs
