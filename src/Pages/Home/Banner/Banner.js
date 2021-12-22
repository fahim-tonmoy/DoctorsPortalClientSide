import { Button, Container, Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import styled from '@emotion/styled';

const bannerBg = {
    background: `url(${bg})`,
}

const Banner = () => {
    return (
        <BannerStyled >
            <Container maxWidth="xl" style={bannerBg}>
                <Box sx={{ flexGrow: 1, my: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7} className='vertical-center' style={{textAlign: 'left'}}>
                            <Box>
                                <Typography variant ='h3'>
                                    Your new smile <br />
                                    Starts Here
                                </Typography>
                                <Typography variant ='h6' sx={{fontSize: 14, fontWeight: 300, color: 'gray'}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere labore distinctio consequuntur deserunt eius quis. Aliquid sint assumenda impedit consequatur, fugit, dolor eius repudiandae officia natus esse, quisquam magnam labore!
                                </Typography>
                                <Button variant="contained" sx={{ my : 5}} style={{ backgroundColor: '#57E7ED' }}>Get Appointment</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} className='vertical-center'>
                        <img src={chair} style={{ width: '450px'}} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </BannerStyled>
    );
};

const BannerStyled = styled.div`
.vertical-center {
    display: flex;
    align-items: center;
    height: 450px;
}

`;

export default Banner;
