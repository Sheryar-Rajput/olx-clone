import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { Typography } from '@mui/material'
function footer() {
    return (
        <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            // bgcolor='black'
            color='white'
            style={{ background: '#2E3B55'}}
        >
            <Container maxWidth='lg' >
                <Grid container spacing={5}  >
                    <Grid item xs={12} sm={4} md={4} >
                        <Box borderBottom={1}  >
                            <Typography sx={{
                                flexGrow: 1,
                                fontFamily: 'arial,sans-serif',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} variant='h6' >
                                Help
                            </Typography>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none' >
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none' >
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none' >
                                Privacy
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} >
                        <Box borderBottom={1} >
                            <Typography sx={{
                                flexGrow: 1,
                                fontFamily: 'arial,sans-serif',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} variant='h6' >
                                Account
                            </Typography>
                        </Box>

                        <Box>
                            <Link href='/' color='inherit' underline='none' >
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none'>
                                Register
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} >
                        <Box borderBottom={1} >
                            <Typography sx={{
                                flexGrow: 1,
                                fontFamily: 'arial,sans-serif',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }} variant='h6' >
                                Channels
                            </Typography>
                        </Box>
                        <Box   >

                            <Link href='/' color='inherit' underline='none' >

                                Facebook
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none' >
                                Twitter
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/' color='inherit' underline='none' >
                                Instagram
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} >
                    copy right &reg; 2022
                </Box>
            </Container>
        </Box>
    )
}

export default footer
