import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(44,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'center',
    marginTop: 120
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'flex-start',
                alignItems:'center',
                textAlign:'left'
            }}>
                    <Box>
                        <Typography variant="h6" sx={{mb: 5}} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{my: 5}}  style={{ color: 'white', fontWeight: 700 }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6"  sx={{my: 5}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorum explicabo quaerat! Veritatis necessitatibus inventore consequuntur minus, eveniet officia perferendis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            Learn More
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;