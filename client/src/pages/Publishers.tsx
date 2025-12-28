import React from 'react';
import { Box, Container, Grid } from '@mui/system';
import Navbar from '../components/Navbar';
import PublisherButton from '../components/PublisherButton';
import PublisherCard from '../components/PublisherCard';

export default function Publishers() {
    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <Container>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                        <PublisherButton />
                        <PublisherButton />
                        <PublisherButton />
                        <PublisherButton />
                        <PublisherButton />
                        <PublisherButton />
                    </Box>
                </Container>
            </Box>
        </>
    )
}