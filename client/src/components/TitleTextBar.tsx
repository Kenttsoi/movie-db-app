import React from 'react';
import { Paper, Typography, Box } from "@mui/material";
import { blue, deepOrange, teal } from '@mui/material/colors';
import sampleData from '../sample-data/sample-data.json';

type TitleTextBarProps = {
    text: string
}

function TitleTextBar({text}: TitleTextBarProps) {
    return (
        <Paper
            sx={{
                bgcolor: deepOrange[900],
                color: "common.white",
                width: "auto",
                p: "15px 20px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                height: 20,
                marginBottom: 2,
                borderRadius: 2,
            }}
            elevation={0}
        >
            {text}
        </Paper>
    )
}

export default TitleTextBar