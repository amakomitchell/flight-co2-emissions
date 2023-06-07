import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const EmissionsDisplay = ({emissions, departure, destination}: any) => {
    return(
        <Box paddingTop="6.25rem">
            <Paper elevation={1}>
                <Box padding="0.625rem 3.125rem 1.25rem">
                    <h2>Emissions per Flight</h2>
                    <Box marginBottom="1.5rem">Flight departed from {departure} airport and arrived at {destination} airport</Box>
                    <Box>Total amount of CO2 in kilograms: {emissions}</Box>
                </Box>
            </Paper>
        </Box>
    )
}