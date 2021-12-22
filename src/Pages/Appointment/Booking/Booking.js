import { Button, Grid, Paper, Typography } from '@mui/material';

import BookingModal from '../BookingModal/BookingModal';
import React from 'react';

const Booking = ({booking, date, setBookingSuccess}) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    const {id, name, time, space} = booking;
    return (
            <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={8} sx={{py:3}}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant='h5'>
                        {name}
                    </Typography>
                    <Typography variant='h6'>
                        {time}
                    </Typography>
                    <Typography variant='caption' display='block'>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained'>Book Now</Button>
                </Paper>
            </Grid>
            <BookingModal 
                date={date}
                booking={booking}
                handleBookingClose={handleBookingClose} 
                openBooking={openBooking}
                setBookingSuccess={setBookingSuccess}
            />
            </>
    );
};

export default Booking;