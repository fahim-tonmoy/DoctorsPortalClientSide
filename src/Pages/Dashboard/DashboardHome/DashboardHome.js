import React, { useState } from 'react';

import Appointments from '../Appointments/Appointments';
import Calandar from '../../Shared/Calendar/Calandar';
import { Grid } from '@mui/material';

const DashboardHome = () => {
    
  const [date, setDate] = useState(new Date);
    return (
        <Grid container sx={{ p: 5 }} spacing={2}>
            <Grid sx={{ px: 2 }} item xs={12} sm={12} md={5} lg={6}>
                <Calandar
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid sx={{ px: 4 }} item xs={12} sm={12} md={7} lg={6}>
                <Appointments date={date} />
            </Grid>
        </Grid>
    );
};

export default DashboardHome;