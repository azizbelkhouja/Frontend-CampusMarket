import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>

      <Grid2 container spacing={9}>
        <Grid2 size={{xs: 1}}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor: "#9155FD"}}>
              A
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{xs: 9}}>
          <div className="space-y-2">
            <div>
              <p className='font-semibold text-lg'>Aziz</p>
              <p className='opacity-70'>2024-12-06 5:57pm</p>
            </div>
          </div>
          <Rating value={4.5} readOnly precision={.5}/>
          <p>perfetto</p>
          <div>
            <img className='w-24 h-24 object-cover' src="https://i.ebayimg.com/images/g/SqIAAOSwksVnTj0g/s-l1600.webp" alt="" />
          </div>
        </Grid2>
      </Grid2>
      
      <div>
        <IconButton>
          <Delete sx={{color:red[700]}} />
        </IconButton>
      </div>

    </div>
  )
}

export default ReviewCard