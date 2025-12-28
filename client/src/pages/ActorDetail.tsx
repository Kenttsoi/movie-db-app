import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Card, CardMedia, Container, Grid, Chip, Stack,Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import Navbar from '../components/Navbar';
import TitleTextBar from '../components/TitleTextBar';
import sampleData from '../sample-data/sample-data.json';

export default function ActorDetail() {
    const { id } = useParams();

    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <Container>
                    <Grid container spacing={0}>
                        <Grid size={12}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                                    <Card sx={{ width: "100%" }}>
                                        <CardMedia
                                            component="img"
                                            image="/src/sample-data/sample-images/eita.jpg"
                                            sx={{
                                                aspectRatio: "3/4",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Card>
                                </Grid>
                                <Grid size={{ xs: 12, md: 8, lg: 8 }}>
                                    <TitleTextBar text={sampleData.actor1} />
                                    <Timeline
                                        sx={{
                                            [`& .${timelineOppositeContentClasses.root}`]: {
                                                flex: 0.2,
                                            },
                                        }}
                                    >
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                2009
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Stack
                                                    direction={{ xs: "column", md: "row" }}
                                                    spacing={1}
                                                >
                                                    <Chip label={sampleData.code} size="small" sx={{ width: "fit-content"}}/>
                                                    <Typography>{sampleData.titleText}</Typography>
                                                </Stack>

                                            </TimelineContent>

                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Stack
                                                    direction={{ xs: "column", md: "row" }}
                                                    spacing={1}
                                                >
                                                    <Chip label={sampleData.code} size="small" sx={{ width: "fit-content"}}/>
                                                    <Typography>{sampleData.titleText}</Typography>
                                                </Stack>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent>
                                                2010
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Stack
                                                    direction={{ xs: "column", md: "row" }}
                                                    spacing={1}
                                                >
                                                    <Chip label={sampleData.code} size="small" sx={{ width: "fit-content"}}/>
                                                    <Typography>{sampleData.titleText}</Typography>
                                                </Stack>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}