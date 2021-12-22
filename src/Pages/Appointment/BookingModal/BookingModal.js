import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
    const [bookingInfo, setBookingInfo] = useState({});
    const {user} = useAuth();
    const { name, time } = booking;
    const initialInfo = { 
        patientName: user.displayName,
        email: user.email,
        phone: ''
    }


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
        e.preventDefault();
    }

    const handleBookingSubmit = e => {
        // collect data
        const appointment = {
            ...bookingInfo,
            time, 
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send to server
        // console.log(appointment);
        fetch(`http://localhost:5000/appointments`, {
            method: "POST", 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(appointment)
        }) 
            .then( res => res.json())
            .then( data => {
                if(data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })

        handleBookingClose();
        e.preventDefault();
    }
    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form>
                    <TextField
                        disabled
                        sx={{width: '90%', my:1}}
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        sx={{width: '90%', my:1}}
                        id="outlined-size-small"
                        name="patientName"
                        defaultValue={user.displayName}
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{width: '90%', my:1}}
                        id="outlined-size-small"
                        name='email'
                        defaultValue={user.email}
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{width: '90%', my:1}}
                        id="outlined-size-small"
                        name='phone'
                        defaultValue='Phone Number'
                        size="small"
                        onBlur={handleOnBlur}  
                    />
                    <TextField
                        disabled
                        sx={{width: '90%', my:1}}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button onClick={handleBookingSubmit} type='submit' variant='contained'> Book</Button>
                </form>
            </Box>
      </Modal>
    );
};

export default BookingModal;