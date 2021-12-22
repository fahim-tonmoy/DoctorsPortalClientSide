import { Container, Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Service from './Service/Service';
import cavity from '../../images/cavity.png';
import fluoride from '../../images/fluoride.png';
import { fontWeight } from '@mui/system';
import whitening from '../../images/whitening.png';

// import { styled } from 'styled-components';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia rerum nemo, reprehenderit saepe doloremque, in consequuntur repellat modi a amet sunt? Officiis delectus eligendi magni id dolor accusantium aliquid?',
        img: fluoride 
    },
    {
        name: 'cavity Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia rerum nemo, reprehenderit saepe doloremque, in consequuntur repellat modi a amet sunt? Officiis delectus eligendi magni id dolor accusantium aliquid?',
        img: cavity 
    },
    {
        name: 'whitening Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus mollitia rerum nemo, reprehenderit saepe doloremque, in consequuntur repellat modi a amet sunt? Officiis delectus eligendi magni id dolor accusantium aliquid?',
        img: whitening 
    }
]

const Services = () => {
    return (
        // <ServicesStyled>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2 }} variant="h3" component="div">
                    Our Services
                </Typography>
                <Typography variant="h6" component="div">
                    Services we Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service) => (
                        <Service 
                        key={service.name}
                            service={service}
                        />
                    ))}
                </Grid>
                </Container>
            </Box>
        // </ServicesStyled>
    );
};

// const ServicesStyled = styled.div``;

export default Services;