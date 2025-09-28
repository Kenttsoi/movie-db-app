import React from 'react';
import { Card, CardContent, CardMedia, Stack, Typography, Chip, Box, CardActionArea } from '@mui/material';
import sampleData from '../sample-data/sample-data.json';
import { Link } from 'react-router-dom';

export default function ActorCard() {
    return (
        <>
            <Card sx={{ width: "100%" }}>
                <CardMedia
                    component="img"
                    image="/src/sample-data/sample-images/eita.jpg"
                    sx={{
                        aspectRatio: "3/4",
                        objectFit: "cover",
                    }}

                />
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="subtitle1" fontWeight="bold" noWrap>
                        {sampleData.actor1}
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}