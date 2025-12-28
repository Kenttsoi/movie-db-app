import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Box, Card, CardContent, CardMedia, Accordion, AccordionDetails, AccordionSummary, Typography, Stack, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import TitleTextBar from '../components/TitleTextBar';
import SeriesCard from '../components/SeriesCard';

export default function PublisherDetail() {
    const { id } = useParams();
    
    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <Box sx={{ paddingLeft: 2, paddingRight: 2 }}>
                    <TitleTextBar text={'Coat'} />
                    <Container>
                        <Grid container spacing={3}>
                            <Grid size={{ md: 6 }}>
                                <SeriesCard />
                            </Grid>
                            <Grid size={{ md: 6 }}>
                                <SeriesCard />
                            </Grid>
                            <Grid size={{ md: 6 }}>
                                <SeriesCard />
                            </Grid>
                            <Grid size={{ md: 6 }}>
                                <SeriesCard />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}