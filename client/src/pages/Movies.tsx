import React from 'react';
import { Box, Container, Grid } from "@mui/system";
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

export default function Movies() {
    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <Container>
                    <Grid container spacing={3}>
                        <Grid size={{ md: 12, lg: 6 }}>
                            <MovieCard />
                        </Grid>
                        <Grid size={{ md: 12, lg: 6 }}>
                            <MovieCard />
                        </Grid>
                        <Grid size={{ md: 12, lg: 6 }}>
                            <MovieCard />
                        </Grid>
                        <Grid size={{ md: 12, lg: 6 }}>
                            <MovieCard />
                        </Grid>
                    </Grid>
                </Container>
                
            </Box>

        </>
    )
}
