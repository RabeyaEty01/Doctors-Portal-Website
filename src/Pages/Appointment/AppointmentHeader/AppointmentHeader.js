import { Container, Grid } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import React from 'react';
import Calander from '../../Shared/Calander/Calander';


const bannerBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center'
}


const AppointmentHeader = ({date,setDate}) => {
   
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calander
                        date={date} setDate={setDate}
                        ></Calander>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400 }}
                            src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;