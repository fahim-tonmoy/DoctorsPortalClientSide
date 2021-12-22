import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';

import Calandar from '../Shared/Calendar/Calandar';
import bg from '../../images/bg.png';
import chair from '../../images/chair.png';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <div>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={6}>
                        <Calandar date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} style={{ width: '100%'}} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;