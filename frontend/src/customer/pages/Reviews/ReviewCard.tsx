import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>

      <Grid container spacing={9}>
        <Grid size={{xs: 1}}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor: "#9155FD"}}>
              A
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{xs: 9}}>
          <div className="space-y-2">
            <div>
              <p className='font-semibold text-lg'>Azizos</p>
              <p className='opacity-70'>2024-12-06 5:57pm</p>
            </div>
          </div>
          <Rating value={4.5} readOnly precision={.5}/>
          <p>perfetto</p>
          <div>
            <img className='w-24 h-24 object-cover' src="https://www.clcbike.com/156429-large_default/bici-elettrica-full-suspension-conway-xyron-s-29-bosch-smart-2024.jpg" alt="" />
          </div>
        </Grid>
      </Grid>
      
      <div>
        <IconButton>
          <Delete sx={{color:red[700]}} />
        </IconButton>
      </div>

    </div>
  )
}

export default ReviewCard