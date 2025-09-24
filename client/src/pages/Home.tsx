import React from 'react';
import { Box } from "@mui/system";
import Navbar from '../components/Navbar';

function Home() {
    return (
        <>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
                <Navbar />
                
            </Box>

        </>

    )
}

export default Home