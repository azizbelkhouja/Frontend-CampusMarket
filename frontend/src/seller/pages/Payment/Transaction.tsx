import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TransactionTable() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Customer Details</StyledTableCell>
            <StyledTableCell align="right">Order</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {[1, 2, 3].map((item) => (
              <TableRow key={1}>
                <TableCell align="left"><div className='space-y-1'>
                  <h1 className='font-medium'>Today</h1>
                  <h1 className='text-xs text-gray-600 font-semibold'>12:00 PM</h1>
                  </div></TableCell>
                <TableCell component="th" scope="row">
                  <div className='space-y-2'>
                    <h1>John</h1>
                    <h1 className='font-semibold'>john@example.com</h1>
                    <h1 className='font-bold text-gray-600'>+1234567890</h1>
                  </div>
                </TableCell>
                <TableCell>
                  Order Id : <strong> {1} </strong>
                </TableCell>
                <TableCell
                  align="right">
                  {1233}€
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}