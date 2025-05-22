import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const PayoutsTable = () => {
  
  return (
    <div>
          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align='right'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3].map(() => (
              <TableRow key={1}>
                <TableCell align="left">{1}</TableCell>
                <TableCell component="th" scope="row">
                  <div className='flex gap-1 flex-wrap'>
                    {[1, 2, 3].map(() =>
                      <div key={1} className='flex gap-5'>
                        <img className='w-20 rounded-md' src="https://files.refurbed.com/ii/samsung-galaxy-s24-ultra-1705563165.jpg" alt="" />
                        <div className='flex flex-col justify-between py-2'>
                          <h1>Title: Samsung Galaxy S24 Ultra</h1>
                          <h1>Price: 899€</h1>
                          <h1>Color: Phantom Black</h1>
                          <h1>Size: 256GB</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PayoutsTable