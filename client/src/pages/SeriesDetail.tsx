import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Box, Card, CardContent, CardMedia, Accordion, AccordionDetails, AccordionSummary, Typography, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import TitleTextBar from '../components/TitleTextBar';
import NumberedAccordion from '../components/NumberedAccordion';
import sampleData from '../sample-data/sample-data.json';

export default function SeriesDetail() {
    const { id } = useParams();

    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <TitleTextBar text={sampleData.titleText} />
                
                <NumberedAccordion />
            </Box>


        </>
    )
}