import React from 'react'
import { Container, Box , Stack, Typography } from '@mui/material'
import Image from 'next/image'
import footage from '../assets/footage.png'
import location from'../assets/camera_card_comp/location.png'
import exc from '../assets/camera_card_comp/exc.png'
import task from '../assets/camera_card_comp/carbon_task-tools.png'
import graph from '../assets/camera_card_comp/graph.png'
import trash from '../assets/camera_card_comp/trash.png'
import recorder from '../assets/camera_card_comp/recorder.png'

const Camera_card = ({activeColor = '#00DB4ADE' }) => {
  return (
    <Container sx={{ height: '430px', width: '340px', backgroundColor: 'white', position: 'relative',display:'flex',justifyContent:'center',borderRadius:'12px'}}>
      <Box sx={{height:'240px',width:'340px',position:'absolute'}}>
        <Image src={footage} layout="fill" objectFit="cover"/>
      </Box>
      <Stack direction='column' spacing={2} sx={{marginTop: '240px',height:'144px',width:'291px',paddingTop:'1rem',paddingBottom:'1rem'}}>
        <Typography sx={{width:'253px',fontSize:'16px',textWrap:'nowrap',fontWeight:'500'}}>Bank Entrance-front-view Camera1</Typography>
        <Stack direction='row' spacing={2} sx={{height:'14px'}}>
          <Image src={task} layout='fixed' height={14} width={11}/>
          <Typography sx={{fontSize:'13px',color:'#757575'}}>3 Recipes Added</Typography>
        </Stack>
        <Stack direction='row' spacing={2} sx={{height:'14px'}}>
          <Image src={exc} layout='fixed' height={14} width={12}/>
          <Typography sx={{fontSize:'13px',color:'#757575'}}>today, 04:45pm: Unidentified face detected</Typography>
        </Stack>
        <Stack direction='row' spacing={2} sx={{height:'14px'}}>
          <Image src={location} layout='fixed' height={14} width={12}/>
          <Typography sx={{fontSize:'13px',color:'#757575'}}>Coimbatore branch</Typography>
        </Stack>
      <Container sx={{display:'flex',width:'100%',justifyContent:'space-between',padding:'0'}}>
        <Box sx={{height:'25px',padding:'4px 8px 4px 8px',backgroundColor: activeColor,borderRadius:'4px',fontSize:'12px',fontWeight:'600',color:'white'}}>Active</Box>
        <Stack direction='row' spacing={2} sx={{width:'92px',paddingTop:'1px',paddingBottom:'2px'}}>
          <Image src={trash} height={18} width={16} />
          <Image src={recorder} height={18} width={20}/>
          <Image src={graph} height={18} width={18}/>
        </Stack>
      </Container>
      </Stack>
    </Container>
  )
}

export default Camera_card
