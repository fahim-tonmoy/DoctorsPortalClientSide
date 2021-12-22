import React, { useState } from 'react';

import AppointmentHeader from './AppointmentHeader';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';
import Navigation from '../Shared/Navigation/Navigation';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navigation />
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </div>
    );
};



export default Appointment;