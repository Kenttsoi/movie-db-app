import React from 'react'
import { Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import sampleData from "../sample-data/sample-data.json"


export default function SeriesCard() {
  return (
    <>
        <Paper
            sx={{
                width: "auto",
                padding: "15px 20px",
                borderRadius: 2,
            }}
            elevation={2}
        >
            <Typography component={Link} to={`/series/1`} variant='subtitle1' fontWeight="bold" sx={{ textDecoration: "none", color: "inherit", "&:hover": { textDecoration: "underline" } }}>
                {sampleData.titleText}
            </Typography>
        </Paper>
    </>
  )
}