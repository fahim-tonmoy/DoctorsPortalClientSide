import React, { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../hooks/useAuth';

const Appointments = ({ date }) => {
    const { user, authToken } = useAuth();
    const [ appointments, setAppointments ] = useState([]);
    
    useEffect( () => {
        const url = `https://desolate-shelf-41361.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url, {
            headers: {
                'authorization': `Bearer ${authToken}`
            }
        })
            .then( res => res.json())
            .then( data => setAppointments(data));
    }, [date, user.email, authToken])
    return (
        <div>
            <h2>Appointments : {appointments.length}</h2>
            <TableContainer component={Paper}>
                <Table  aria-label="Appointments table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Service</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {appointments.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.patientName}
                        </TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.serviceName}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;