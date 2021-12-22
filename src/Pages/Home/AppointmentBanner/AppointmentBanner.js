import { Button, Container, Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import appointment from '../../../images/appointment-bg.png';
import { display } from '@mui/system';
import doctor from '../../../images/doctor.png';
import styled from 'styled-components';

const appointmentBanner = {
    background: `url(${appointment})`
}

const AppointmentBanner = () => {
    return (
        <AppointmentBannerStyled>
            <Container maxWidth="xl">
                <h1>this is Appointment</h1>
                <Box className='appointment-banner' style={appointmentBanner} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '400', marginTop: '-220px', marginLeft: '-100px' }} src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                                display: 'flex', 
                                justifyContent: 'flex-start',
                                textAlign: 'left',
                            }}>
                            <Box>
                                <Typography variant="h5" sx={{ mt : 25}} style={{ color: '#57E7ED' }}>
                                    Appointment
                                </Typography>
                                <Typography variant="h3" sx={{ my : 5}} style={{ color: 'white' }}>
                                    Make an Appointment today
                                </Typography>
                                <Typography variant="h6" sx={{ my : 5}} style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et deleniti aperiam? Adipisci soluta odit aut ducimus sit ipsam doloribus.
                                </Typography>
                                <Button variant="contained" sx={{ my : 5}} style={{ backgroundColor: '#57E7ED' }}>Learn More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </AppointmentBannerStyled>
    );
};

const AppointmentBannerStyled = styled.div`
.appointment-banner {
    background: url(appointment);
    margin-top: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(45,58,74, .95)!important;
    background-blend-mode:  darken, luminosity!important;;
}
`;

export default AppointmentBanner;