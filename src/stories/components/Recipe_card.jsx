import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import add from '../assets/add.png'

const Recipe_card = ({ onButtonClick }) => {
  return (
    <Stack sx={{width:'349px',height:'140px',backgroundColor:'white',paddingLeft:'1rem',paddingRight:'1rem',borderRadius:'12px',border:'black 2px solid'}} spacing={2} direction='column'>
        <Button style={{marginTop:'1rem'}} onClick={onButtonClick} sx={{height:'42px',width:'42px'}}>
          <Image src={add} height={42} width={42} />
        </Button>
        <Typography sx={{fontWeight:'400',fontSize:'20px',color:'#656565'}}>Recipe Management</Typography>
        <Typography sx={{fontWeight:'500',fontSize:'12px',color:'#000000',opacity:'60%',textAlign:'end'}}>Manage</Typography>
    </Stack>
  )
}

export default Recipe_card
