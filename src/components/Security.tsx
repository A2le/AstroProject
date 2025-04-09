/* eslint-disable react/no-unescaped-entities */
import React, { type JSX } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Security = (): JSX.Element => {
    const theme = useTheme();

    return (
        <Box
        sx={{
            backgroundImage: `url('/privacy_lock.jpg')`, // Path from public folder
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '65vh', // Adjust height as needed
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
        }}
        >
            <Typography
                variant="h1"
                align={'center'}
                gutterBottom
                sx={{
                    fontWeight: 900,
                    color: theme.palette.common.black,
                }}
            >
                <Box
                    component={'svg'}
                    width={100}
                    height={100}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    color={theme.palette.primary.dark}
                    alignContent={'center'}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </Box><br/>
                Your privacy is our top priority
            </Typography>
            <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'center'}
                sx={{
                    color: theme.palette.common.white,
                }}
            >
                We believe that trust is paramount in a relationship. We do not own or sell your data.
            </Typography>
        </Box>
    );
};

export default Security;
