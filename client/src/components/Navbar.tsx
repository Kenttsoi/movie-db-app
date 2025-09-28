import React, { type ReactNode } from 'react'
import { AppBar, Container, Toolbar, Grid, Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import ContactsIcon from '@mui/icons-material/Contacts';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useLocation } from 'react-router-dom';

interface NavItem {
    label: string,
    path: string,
    icon: ReactNode
}

const navItems: NavItem[] = [
    { label: "home page", path: "/", icon: <HomeIcon sx={{ color: 'red' }} /> },
    { label: "movies", path: "/movies", icon: <MovieCreationTwoToneIcon sx={{ color: 'red' }} /> },
    { label: "actors", path: "/actors", icon: <ContactsIcon sx={{ color: 'red' }} /> },
    { label: "publishers", path: "/publishers", icon: <ApartmentIcon sx={{ color: 'red' }} /> }
]

function Navbar() {
    const location = useLocation();
    console.log('location', location);

    return (
        <AppBar position="static" sx={{ bgcolor: 'white', borderRadius: 2, boxShadow: 10, marginBottom: 5 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container spacing={2}>
                        {
                            navItems.map((item) => {
                                const isActive: boolean = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);

                                return (
                                    <Grid key={item.path} >
                                        <Box sx={{ textAlign: "center" }}>
                                            <IconButton aria-label={item.label} href={item.path}>
                                                {item.icon}
                                            </IconButton>
                                            {isActive && (
                                                <Box
                                                    sx={{
                                                        width: "60%",
                                                        height: 3,
                                                        bgcolor: "red",
                                                        borderRadius: 2,
                                                        mx: "auto",
                                                        mt: 0.5,
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Grid>
                                )

                            })
                        }
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar