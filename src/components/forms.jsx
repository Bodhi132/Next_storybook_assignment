import React from 'react'
import { Button, TextField, Box, Typography, Stack, FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Forms = () => {
    return (
        <Box component="form" noValidate sx={{ mt: 1, width: '602px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ textAlign: 'center', mt: '2.2rem' }} style={{ fontSize: '40px', fontWeight: '700' }}>XYZ</Typography>
            <Typography sx={{ textAlign: 'center', mt: '1rem' }} style={{ fontSize: '36px', fontWeight: '400' }}>Welcome Onboard</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '458px' }}>
                <TextField
                    margin="normal"
                    required
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    sx={{ width: '458px' }}
                />
                <TextField
                    margin="normal"
                    required
                    name="email"
                    label="Email Address"
                    id="email"
                    autoComplete="email"
                    sx={{ width: '458px' }}
                />
                <FormControl sx={{ width: '458px' }}>
                    <InputLabel id="demo-simple-select-label">Select Industry</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem></MenuItem>
                    </Select>
                </FormControl>
                <Typography sx={{ fontWeight: '500', fontSize: '16px', marginTop: '1rem' }}>Select Number of Locations</Typography>
                <Stack direction='row' spacing={2} style={{ marginTop: '4px' }}>
                    <Button sx={{ width: '80px', height: '42px', borderRadius: '4px' }} style={{ backgroundColor: '#E7E0EC', fontWeight: '600', fontSize: '16px', color: 'black' }}>1-10</Button>
                    <Button sx={{ width: '80px', height: '42px', borderRadius: '4px' }} style={{ backgroundColor: '#E7E0EC', fontWeight: '600', fontSize: '16px', color: 'black' }}>10-50</Button>
                    <Button sx={{ width: '80px', height: '42px', borderRadius: '4px' }} style={{ backgroundColor: '#E7E0EC', fontWeight: '600', fontSize: '16px', color: 'black' }}>50-150</Button>
                    <Button sx={{ width: '80px', height: '42px', borderRadius: '4px' }} style={{ backgroundColor: '#E7E0EC', fontWeight: '600', fontSize: '16px', color: 'black' }}>150+</Button>
                </Stack>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2}}
                    style={{ backgroundColor: '#333333' }}
                >
                    Continue
                </Button>
            </Box>
        </Box>

    )
}

export default Forms