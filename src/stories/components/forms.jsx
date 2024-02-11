"use client"
import { Button, TextField, Box, Typography, Stack, FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useState } from 'react'

const Forms = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [industry, setIndustry] = useState('');

    const isFormValid = () => {
        return name !== '' && email !== '' && industry !== '';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            onSubmit();
        }
    }

    return (
        <Box component="form" noValidate sx={{ mt: 1, width: '602px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
            {/* ... */}
            <TextField
                margin="normal"
                required
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                sx={{ width: '458px' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                margin="normal"
                required
                name="email"
                label="Email Address"
                id="email"
                autoComplete="email"
                sx={{ width: '458px' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl sx={{ width: '458px' }}>
                <InputLabel id="demo-simple-select-label">Select Industry</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                >
                    <MenuItem value="industry1">Industry 1</MenuItem>
                    <MenuItem value="industry2">Industry 2</MenuItem>
                    {/* Add more MenuItems as needed */}
                </Select>
            </FormControl>
            <Typography sx={{ fontWeight: '500', fontSize: '16px', marginTop: '1rem'}}>Select Number of Locations</Typography>
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
                sx={{ mt: 3, mb: 2,width:'458px' }}
                style={{ backgroundColor: '#333333', color: 'white' }}
                disabled={!isFormValid()}
                disableElevation
            >
                Continue
            </Button>
        </Box>
    )
}

export default Forms
