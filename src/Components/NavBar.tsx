import { AppBar, Box, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import { Cloud, Copyright, DocumentScanner, Home, Settings } from '@mui/icons-material'
import './style/sharedcss.css'

export const Navbar =() =>{
    return(
        <>
        <AppBar>
            <Toolbar>
                <Stack color='primary' spacing={6} direction='row'>
                    <Stack spacing={2} direction='row'>
                        <Cloud color='inherit'/>
                        <Typography variant='h5' color='inherit'>St. Boniface Cloud</Typography>
                    </Stack>
                    <Stack className='navbaritems' spacing={5} direction='row'>
                    <Stack spacing={2} direction='row'>
                        <IconButton  color='inherit'>
                            <Link href='http://localhost:3000/home' color='inherit' underline='none'>
                            <Home />
                        <Typography variant='subtitle1' color='inherit'>Home</Typography> 
                        </Link>
                        </IconButton>
                    </Stack>
                    <Stack spacing={2} direction='row'>
                    <IconButton color='inherit'>
                    <Link href='http://localhost:3000/about' color='inherit' underline='none'>
                            <DocumentScanner />
                        <Typography variant='subtitle1' color='inherit'>About</Typography>
                        </Link>
                        </IconButton> 
                    </Stack>
                    <Stack spacing={2} direction='row'>
                    <IconButton color='inherit'>
                    <Link href='http://localhost:3000/settings' color='inherit' underline='none'>
                            <Settings />
                        <Typography variant='subtitle1' color='inherit'>Settings</Typography> 
                        </Link>
                        </IconButton>
                    </Stack>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
        </>
    )
}
export const BottomNav = () =>{
    return(
        <>
        <Box sx={{
            position : 'fixed',
            width : '100%',
            bottom: 0,
            backgroundColor : 'darkslategrey'
        }} >
            <Stack className='copyright' color='inherit' direction='row'>
                <Typography className='text' variant='subtitle2'  >{<Copyright />} All Copyrights Reserved To Lauren Studios Agency</Typography>
            </Stack>
        </Box>
        </>
    )
}