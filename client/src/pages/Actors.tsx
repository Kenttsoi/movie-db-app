import React from 'react';
import { Box, Container, Grid } from "@mui/system";
import Navbar from '../components/Navbar';
import ActorCard from '../components/ActorCard';

export default function Actors() {
    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <Container>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6, sm: 3, xl: 2 }}>
                            <ActorCard />
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3, xl: 2 }}>
                            <ActorCard />
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3, xl: 2 }}>
                            <ActorCard />
                        </Grid>
                        <Grid size={{ xs: 6, sm: 3, xl: 2 }}>
                            <ActorCard />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}