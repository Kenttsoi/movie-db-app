import React from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Box, Card, CardContent, CardMedia, Accordion, AccordionDetails, AccordionSummary, Typography, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import TitleTextBar from '../components/TitleTextBar';
import sampleData from '../sample-data/sample-data.json';
import ActorCard from '../components/ActorCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TagIcon from '@mui/icons-material/Tag';
import FactoryIcon from '@mui/icons-material/Factory';
import ViewListIcon from '@mui/icons-material/ViewList';
import { deepOrange, grey } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

export default function MovieDetail() {
    const { id } = useParams();

    return (
        <>
            <Box sx={{ padding: 1 }}>
                <Navbar />
                <TitleTextBar text={sampleData.titleText} />
                <Card sx={{ display: 'flex', boxShadow: 4, borderRadius: 5, width: "100%" }}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
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
                        <TitleTextBar text={sampleData.moviePageSection3} />
                        <Grid container spacing={2} sx={{ padding: 2 }}>
                            <Grid size={12}>
                                <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                                    <Typography
                                        variant="overline"
                                        gutterBottom
                                        sx={{ display: "flex", alignItems: "center", color: grey[500] }}
                                    >
                                        <CalendarTodayIcon fontSize="small" sx={{ mr: 0.5 }} /> {sampleData.year}
                                    </Typography>
                                    <Typography
                                        variant="overline"
                                        gutterBottom
                                        sx={{ display: "flex", alignItems: "center", color: grey[500] }}
                                    >
                                        <FactoryIcon fontSize="small" sx={{ mr: 0.5 }} /> {sampleData.publisher}
                                    </Typography>
                                    <Typography
                                        variant="overline"
                                        gutterBottom
                                        sx={{ display: "flex", alignItems: "center", color: grey[500] }}
                                    >
                                        <ViewListIcon fontSize="small" sx={{ mr: 0.5 }} /> {sampleData.series}
                                    </Typography>
                                    <Typography
                                        variant="overline"
                                        gutterBottom
                                        sx={{ display: "flex", alignItems: "center", color: grey[500] }}
                                    >
                                        <TagIcon fontSize="small" sx={{ mr: 0.5 }} /> {sampleData.code}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid size={12}>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box component="span" sx={{ width: '10%', flexShrink: 0 }}><LooksOneIcon sx={{ color: deepOrange[700]}} /></Box>
                                        <Typography component="span" >{sampleData.scene1Title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sampleData.scene1Content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box component="span" sx={{ width: '10%', flexShrink: 0 }}><LooksTwoIcon sx={{ color: deepOrange[700]}} /></Box>
                                        <Typography component="span" >{sampleData.scene2Title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sampleData.scene2Content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box component="span" sx={{ width: '10%', flexShrink: 0 }}><Looks3Icon sx={{ color: deepOrange[700]}} /></Box>
                                        <Typography component="span" >{sampleData.scene3Title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sampleData.scene3Content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Box component="span" sx={{ width: '10%', flexShrink: 0 }}><Looks4Icon sx={{ color: deepOrange[700]}} /></Box>
                                        <Typography component="span" >{sampleData.scene4Title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sampleData.scene4Content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <TitleTextBar text={sampleData.moviePageSection2} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, md: 3 }}>
                                <ActorCard />
                            </Grid>
                            <Grid size={{ xs: 6, md: 3 }}>
                                <ActorCard />
                            </Grid>
                            <Grid size={{ xs: 6, md: 3 }}>
                                <ActorCard />
                            </Grid>
                            <Grid size={{ xs: 6, md: 3 }}>
                                <ActorCard />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}