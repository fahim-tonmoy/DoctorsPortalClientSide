import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: "teeth Orthodonics",
        time: "8:00 AM - 9:00 AM",
        space: 10,
    },
    {
        id: 2,
        name: "Cosmetic Denstistry",
        time: "9:00 AM - 10:00 AM",
        space: 7,
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "10:00 AM - 11:00 AM",
        space: 10,
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "11:00 AM - 12:00 PM",
        space: 10,
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "6:00 PM - 7:00 PM",
        space: 10,
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "7:00 PM - 8:00 PM",
        space: 10,
    }
]


const AvailableAppointments = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div>
            <Container>
                <Typography variant='h3' sx={{ color: 'info.main',  my:5 }} >Available Appointments {date.toDateString()}</Typography>
                 {/* Success Message */}
                 {bookingSuccess && <Alert sx={{ my: 5}} severity="success">Appointment booked Successfully</Alert>}
                <Grid container spacing={2}>
                    {
                        bookings.map( booking => 
                            <Booking 
                                key={booking.id}
                                booking={booking} 
                                date={date}
                                setBookingSuccess={setBookingSuccess}
                            />
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointments;