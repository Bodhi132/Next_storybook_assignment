import { Stack, Typography } from '@mui/material'
import React from 'react'
import add from '../assets/add.png'
import Image from 'next/image'

const Recipe_card = () => {
  return (
    <Stack sx={{width:'349px',height:'140px',backgroundColor:'white',paddingLeft:'1rem',paddingRight:'1rem',borderRadius:'12px'}} spacing={2}>
        <Image src={add} height={42} width={42} style={{marginTop:'1rem'}}/>
        <Typography sx={{fontWeight:'400',fontSize:'20px',color:'#656565'}}>Recipe Management</Typography>
        <Typography sx={{fontWeight:'500',fontSize:'12px',color:'#000000',opacity:'60%',textAlign:'end'}}>Manage</Typography>
    </Stack>
  )
}

export default Recipe_card