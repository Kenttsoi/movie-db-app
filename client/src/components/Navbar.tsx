import React from 'react'
import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';

function Navbar() {
    return (
        <AppBar position="static" sx={{ bgcolor: 'white', borderRadius: 2, boxShadow: 10 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MovieCreationTwoToneIcon />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar