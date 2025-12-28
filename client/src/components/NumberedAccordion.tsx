import React from 'react'
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './NumberedAccordion.module.css';

const NumberBadge = ({ number }: { number: number }) => {
  return <span className={styles.numberBadge}>{number}</span>;
};

export default function NumberedAccordion() {
    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {/* <Box component="span" sx={{ width: '10%', flexShrink: 0 }}><LooksOneIcon sx={{ color: deepOrange[700] }} /></Box> */}
                    <Box component="span" sx={{ width: '10%', flexShrink: 0 }}><NumberBadge number={1}/></Box>
                    <Typography component="span" >Title</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        hi
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>

    )
}
