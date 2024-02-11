import React from 'react'
import { Container, Box, Stack, Button } from '@mui/material'
import { Typography } from '@mui/material'
import Image from 'next/image'
import cameras from '../assets/124.png'
import cc from '../assets/cc.png'
import warning from '../assets/warning.png'
import info from '../assets/info.png'

const Charts = () => {
    return (
        <Container sx={{ width: '1076px', height: '275px', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
            <Typography sx={{ width: '100%', textAlign: 'center', marginTop: '1rem', marginBottom: '1rem', fontSize: '20px', fontWeight: '600' }}>Camera Health</Typography>
            <Stack direction='row' spacing={2}>
                <Box>
                    <Image src={cameras} width={190} height={190} />
                </Box>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', height: '66px', width: '814px', alignItems: 'center', backgroundColor: '#F1F1F1', borderRadius: '6px' }}>
                        <Image src={cc} objectFit='contain' style={{ marginLeft: '1rem', marginRight: '1rem' }} />
                        <p>Totally <span style={{ fontWeight: 'bold' }}>124</span> Cameras are in 9 NVRs and installed in 12 Locations</p>
                    </Box>
                    <Box sx={{ display: 'flex', backgroundColor: '#FFBFCC', height: '66px', width: '814px', alignItems: 'center', borderRadius: '6px',justifyContent:'space-between'}}>
                        <div style={{display:'flex'}}>
                            <Image src={warning} height={19} width={19} style={{ marginLeft: '1rem', marginRight: '1rem' }} />
                            <p><span style={{ fontWeight: 'bold' }}>6</span> Cameras were experiencing downtime in Last 30 days</p>
                        </div>
                        <Button sx={{width:'103px',height:'34px',fontSize:'12px',textWrap:'nowrap'}} style={{backgroundColor:'white',marginRight:'1rem',textTransform:'none'}}>View Cameras</Button>
                    </Box>
                    <Stack direction='row' spacing={2}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '160px' }}>
                            <div style={{ height: '16px', width: '16px', borderRadius: '50%', backgroundColor: '#19A01E' }}></div>
                            <Typography sx={{ fontSize: '14px' }}>Super Healthy (56)</Typography>
                            <Image src={info} sx={{ height: '16px', width: '16px' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '160px', justifyContent: 'space-between' }}>
                            <div style={{ height: '16px', width: '16px', borderRadius: '50%', backgroundColor: '#00DB4A' }}></div>
                            <Typography sx={{ fontSize: '14px' }}>Super Healthy (56)</Typography>
                            <Image src={info} sx={{ height: '16px', width: '16px' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '160px', justifyContent: 'space-between' }}>
                            <div style={{ height: '16px', width: '16px', borderRadius: '50%', backgroundColor: '#FB8B34' }}></div>
                            <Typography sx={{ fontSize: '14px' }}>Super Healthy (56)</Typography>
                            <Image src={info} sx={{ height: '16px', width: '16px' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', width: '160px', justifyContent: 'space-between' }}>
                            <div style={{ height: '16px', width: '16px', borderRadius: '50%', backgroundColor: '#ED1C24' }}></div>
                            <Typography sx={{ fontSize: '14px' }}>Super Healthy (56)</Typography>
                            <Image src={info} sx={{ height: '16px', width: '16px' }} />
                        </div>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Charts