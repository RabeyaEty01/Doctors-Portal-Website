import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';



const services = [
    {
        name: 'Fluride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat, alias, sed porro temporibus iste itaque adipisci maiores sunt nulla in harum consectetur laboriosam aut ad maxime iusto? Molestias, qui?",
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat, alias, sed porro temporibus iste itaque adipisci maiores sunt nulla in harum consectetur laboriosam aut ad maxime iusto? Molestias, qui?",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat, alias, sed porro temporibus iste itaque adipisci maiores sunt nulla in harum consectetur laboriosam aut ad maxime iusto? Molestias, qui?",
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight:500, m:2,color:'success.main'}} variant="h6" component="div">
                   OUR SERVICES
                </Typography>
                <Typography sx={{fontWeight:'bold',m:5}} variant="h4" component="div">
                  Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;