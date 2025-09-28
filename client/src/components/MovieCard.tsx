import React from 'react';
import { Card, CardContent, CardMedia, Stack, Typography, Chip, Box, CardActionArea } from '@mui/material';
import sampleData from '../sample-data/sample-data.json';
import { Link } from 'react-router-dom';


function MovieCard() {
  return (
    <>
      <Card sx={{ display: 'flex', boxShadow: 4, borderRadius: 5, width: "100%" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: { xs: "100%", sm: 300 }, height: "100%", objectFit: "cover" }}
              image="/src/sample-data/sample-images/tks4.jpg"
              alt="Live from space album cover"
            />
          </CardActionArea>
          <CardContent sx={{ flex: '1 0 auto', width: { xs: "inherit", sm: 200 } }} >
            <Chip label={sampleData.code} variant="outlined" />
            <Box>
              <Typography component={Link} to={`/movies/1`} variant="h6" sx={{ textDecoration: "none", color: "inherit", "&:hover": { textDecoration: "underline" } }}>
                {sampleData.titleText}
              </Typography>
            </Box>
            <Typography component="div" variant="body2" sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}>
              {sampleData.contentText}
            </Typography>

            <Box sx={{ mt: 2, alignSelf: "flex-start" }}>
              <Stack direction={"row"} spacing={1}>
                <Chip label={sampleData.actor1} />
                <Chip label={sampleData.actor2} />
              </Stack>
            </Box>
          </CardContent>

        </Stack>
      </Card>
    </>
  )
}

export default MovieCard