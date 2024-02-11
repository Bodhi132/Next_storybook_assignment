import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Image from 'next/image'
import video from '../assets/video.png'
import refresh from '../assets/refresh.png'
import { Box } from '@mui/material';
import rectangle from '../assets/Rectangle.png'
import { Link } from '@mui/material';
import { Container } from '@mui/material';
import rec1 from '../assets/recording/Rec_1.png'
import rec2 from '../assets/recording/Rec_2.png'
import rec3 from '../assets/recording/Rec_3.png'

const Pages = () => {

    const myRecObject = [
        {
            image: rec1,
            title: 'Recording_0121',
            paragraph: 'Today, 04:42 pm'
        },
        {
            image: rec2,
            title: 'My Title', // replace with your title
            paragraph: 'This is a paragraph.' // replace with your paragraph
        },
        {
            image: rec3,
            title: 'My Title', // replace with your title
            paragraph: 'This is a paragraph.' // replace with your paragraph
        },
        {
            image: rec1,
            title: 'My Title', // replace with your title
            paragraph: 'This is a paragraph.' // replace with your paragraph
        }
    ]

    return (
        <div style={{ backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '2rem', backgroundColor: '#f8f8f8', width: '1148px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Button variant="contained" style={{ width: '45px', height: '45px', backgroundColor: '#EFEFEF' }}>
                                <ArrowBackIcon style={{ color: 'black', width: '21px', height: '21px' }} />
                            </Button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '2rem' }}>
                            <div style={{ display: 'flex' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '2rem'
                                    }}>VMS</Typography>
                                <Typography
                                    sx={{
                                        marginTop: '1rem'
                                    }}
                                >/ Cameras / Camera Details</Typography>
                            </div>
                            <Typography
                                sx={{
                                    marginTop: '1rem',
                                    fontSize: '12px',
                                    opacity: '40%'
                                }}
                            >Bank Entrance-front-view Camera1</Typography>
                            <Typography
                                sx={{
                                    marginTop: '1rem',
                                    fontSize: '14px'
                                }}
                            >View and manage camera details, recordings and connection details</Typography>
                        </div>
                    </div>
                    <div>
                        <Stack direction='row' spacing={2}>
                            <Button
                                variant='outlined'
                                sx={{
                                    padding: '10px 24px',
                                    height: '40px',
                                    width: '126px',
                                    whiteSpace: 'nowrap'
                                }}
                            >Edit Camera</Button>
                            <Button
                                variant='outlined'
                                sx={{
                                    padding: '10px 24px',
                                    height: '40px',
                                    width: '126px',
                                    whiteSpace: 'nowrap'
                                }}
                            >Deactivate</Button>
                            <Button
                                variant='outlined'
                                sx={{
                                    padding: '10px 24px',
                                    height: '40px',
                                    width: '136px',
                                    whiteSpace: 'nowrap',
                                }}
                                color='error'
                            >Delete Camera</Button>
                        </Stack>
                    </div>
                </div>
                <Stack direction='column' sx={{ padding: '1rem', marginTop: '1rem', backgroundColor: 'white', width: '1102px' }} spacing={3}>
                    <Stack direction='row' spacing={2}>
                        <Button
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '228px',
                                height: '48px',
                                padding: '12px 22px',
                                justifyContent: 'space-between',
                            }}
                            variant='contained'
                            style={{ backgroundColor: '#EFEFEF' }}
                        >
                            <Image
                                src={video}
                                width={20}
                                height={18}
                            />
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >View Recorded Videos
                            </Typography>
                        </Button>
                        <Button
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '228px',
                                height: '48px',
                                padding: '12px 22px',
                                justifyContent: 'space-around'
                            }}
                            style={{ backgroundColor: '#EFEFEF' }}
                            variant='contained'
                        >
                            <Image
                                src={refresh}
                                width={20}
                                height={18}
                            />
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    color: 'black',
                                    fontWeight: 'bold'
                                }}
                            >Refetch Camera
                            </Typography>
                        </Button>
                        {/* <Button>View Recorded Videos</Button> */}
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'inline-block',
                                width: '600px'
                            }}
                        >
                            <Image src={rectangle} alt="Description" width={600} height={337} />
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    fontSize: '13px',
                                    bottom: '5%',
                                    left: '5%',
                                    color: 'white',
                                    fontWeight: '400',
                                }}
                            >
                                01/05/2023  02:42:21 PM
                            </Typography>
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    fontSize: '13px',
                                    bottom: '5%',
                                    right: '5%',
                                    color: 'white',
                                    fontWeight: '400',
                                }}
                            >
                                Hall 01
                            </Typography>
                        </Box>
                        <Box sx={{ width: '436px', height: '337px', border: '1px #E5E5E5 solid', padding: '1rem', borderRadius: '4px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 'full', marginBottom: '1rem' }}>
                                <Typography sx={{ fontWeight: '600', fontSize: '20px' }} >Camera Details</Typography>
                                <Box sx={{ backgroundColor: '#00DB4A', padding: '4px 8px', width: "53px", fontSize: '12px', color: 'white', borderRadius: '4px' }}>Active</Box>
                            </Box>
                            <Stack direction='column' spacing={2} >
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>Location:</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px' }}>Coimbatore</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>City:</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px' }}>Coimbatore</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>Timezone:</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px' }}>Delhi-India</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>Date added::</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px' }}>Aug 03, 2023 12:01:42 PM</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>Last update:</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px' }}>Aug 03, 2023 12:01:42 PM</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>Manufacture details:</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px' }}>ADT</Typography>
                                </Stack>
                                <Stack direction='row' spacing={2}>
                                    <Typography sx={{ fontSize: '13px' }}>RTSP/HLS URL:</Typography>
                                    <Typography sx={{ color: '#757575', fontSize: '13px', cursor: 'pointer' }}><Link>Copy URL</Link></Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                    <Typography sx={{ fontSize: '20px', fontWeight: '600', lineHeight: '24px', marginTop: '1rem', marginBottom: '1rem' }}>Camera Health and Alert</Typography>
                    <Stack direction='row' spacing={2}>
                        <Box style={{ width: '338px', height: '162px', border: '1px #E5E5E5 solid', borderRadius: '4px' }}>
                            <Stack sx={{ padding: '1rem' }} direction='column' spacing={1}>
                                <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.41px' }}>Offline Alert</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>If camera is continuously offline for</Typography>
                                <Typography sx={{ fontWeight: '500', fontSize: '20px', lineHeight: '23.44px' }}>12 minutes</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>Send an email to</Typography>
                                <Typography sx={{ fontWeight: '600', fontSize: '13px', lineHeight: '15.23px' }}>email.com</Typography>
                            </Stack>
                        </Box>
                        <Box style={{ width: '338px', height: '162px', border: '1px #E5E5E5 solid', borderRadius: '4px' }}>
                            <Stack sx={{ padding: '1rem' }} direction='column' spacing={1}>
                                <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.41px' }}>Health Grade</Typography>
                                <Typography sx={{ fontWeight: '500', fontSize: '28px', lineHeight: '32.81px' }}>96%</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>Cheers, this camera had no offline time in the last 30 days</Typography>
                                <Typography sx={{ fontWeight: '600', fontSize: '13px', lineHeight: '15.23px', color: '#4CAF50' }}>Grade A</Typography>
                            </Stack>
                        </Box>
                        <Box style={{ width: '338px', height: '162px', border: '1px #E5E5E5 solid', borderRadius: '4px' }}>
                            <Stack sx={{ padding: '1rem' }} direction='column' spacing={1}>
                                <Typography sx={{ fontWeight: '600', fontSize: '14px', lineHeight: '16.41px' }}>Health Logs</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>Today, 04:37 pm: Activated</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>23 Aug, 02:22 pm: Deactivated</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>21 Aug, 05:12 am: Activated</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>20 Aug, 02:12 am: Deactivated</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: '13px', lineHeight: '15.23px', color: '#757575' }}>19 Aug, 02:12 am: Deactivated</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                    <Container sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '20px', lineHeight: '24px' }}>Recent Recordings</Typography>
                        <Typography sx={{ fontSize: '16px', lineHeight: '24px', cursor: 'pointer' }}><Link sx={{ color: '#3C3C3C' }}>View All</Link></Typography>
                    </Container>
                    <Stack direction='row' spacing={2} sx={{width:'1052px',overflow:'auto'}}>
                        {myRecObject.map((item, index) => (
                            <Box key={index} sx={{ width: 300, height: 300, backgroundColor: '#fff', padding: 2, margin: 2 , border:'1px solid #E5E5E5',height:'237px',borderRadius:'4px'}}>
                                <Image src={item.image} alt={item.title} width={300} height={200} style={{marginBottom:'5px'}} />
                                <Typography sx={{fontSize:'14px',fontWeight:'600',lineHeight:'16.41px'}}>{item.title}</Typography>
                                <Typography sx={{fontSize:'14px',fontWeight:'400',lineHeight:'12px',color:'#757575',marginTop:'4px'}}>{item.paragraph}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </div>
        </div>
    )
}

export default Pages