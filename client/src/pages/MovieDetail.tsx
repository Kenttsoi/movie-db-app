import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Box, Card, CardContent, CardMedia, Paper, Typography, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import TitleTextBar from '../components/TitleTextBar';
import sampleData from '../sample-data/sample-data.json';
import ActorCard from '../components/ActorCard';

export default function MovieDetail() {
    const { id } = useParams();

    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <TitleTextBar text={sampleData.titleText} />
                <Card sx={{ display: 'flex', boxShadow: 4, borderRadius: 5, width: "100%" }}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                    >
                        <CardMedia
                            component="img"
                            sx={{ height: { xs: 250, sm: 400 }, objectFit: "cover", maxWidth: 600 }}
                            image="/src/sample-data/sample-images/tks4.jpg"
                            alt="Live from space album cover"
                        />
                        <CardContent sx={{ width: { xs: "inherit", sm: "100%" } }}>
                            <Box>
                                <Typography component="div" variant="body2" sx={{ whiteSpace: "pre-line" }}>
                                    {sampleData.contentText}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Stack>
                </Card>

                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TitleTextBar text={sampleData.moviePageSection2} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, sm: 3 }}>
                                <ActorCard />
                            </Grid>
                            <Grid size={{ xs: 6, sm: 3 }}>
                                <ActorCard />
                            </Grid>
                            <Grid size={{ xs: 6, sm: 3 }}>
                                <ActorCard />
                            </Grid>
                            <Grid size={{ xs: 6, sm: 3 }}>
                                <ActorCard />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TitleTextBar text={sampleData.moviePageSection3} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}