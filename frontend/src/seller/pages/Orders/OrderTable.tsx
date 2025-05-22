import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { red } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const orderStatus = [
  { color: '#FFA500', label: 'PENDING' }, 
  { color: '#F5BCBA', label: 'PLACED' }, 
  { color: '#F5BCBA', label: 'CONFIRMED' },
  { color: '#1E90FF', label: 'SHIPPED' }, 
   { color: '#32CD32', label: 'DELIVERED' }, 
   { color: '#FF0000', label: 'CANCELLED' },

];
const orderStatusColor = {
  PENDING: { color: '#FFA500', label: 'PENDING' }, // Orange
  CONFIRMED:{ color: '#F5BCBA', label: 'CONFIRMED' },
  PLACED:{ color: '#F5BCBA', label: 'PLACED' }, 
  SHIPPED: { color: '#1E90FF', label: 'SHIPPED' }, // DodgerBlue
  DELIVERED: { color: '#32CD32', label: 'DELIVERED' }, // LimeGreen
  CANCELLED: { color: '#FF0000', label: 'CANCELLED' } // Red
};

export default function OrderTable() {

  const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: HTMLElement | null }>({});

  const handleClick = (event: React.MouseEvent<HTMLElement>, orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
  };


  const handleUpdateOrder = () => {
    console.log('Order updated');
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell align="right">Shipping Address</StyledTableCell>
              <StyledTableCell align="right">Order Status</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1,1,1,1,1].map(() => (
              <StyledTableRow key="1">
                <StyledTableCell align="left">1</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <div className='flex gap-1 flex-wrap'>
                    <div key="" className='flex gap-5'>
                      <img className='w-20 rounded-md' src="https://files.refurbed.com/ii/samsung-galaxy-s24-ultra-1705563165.jpg" alt="" />
                      <div className='flex flex-col justify-between py-2'>
                        <h1>Title: S24 Ultra</h1>
                        <h1>Price: 999€</h1>
                        <h1>Color: Phantom Black</h1>
                        <h1>Size: 256GB</h1>
                      </div>
                    </div>
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <div className='flex flex-col gap-y-2'>
                    <h1>Stefano</h1>
                    <h1>Via Roma, Milano</h1>
                    <h1>Lombardia - 20100</h1>
                    <h1><strong>Mobile:</strong> 1234567890</h1>
                  </div>
                </StyledTableCell>
                <StyledTableCell
                  sx={{ color: red[500] }}
                  align="center"> <Box sx={{ borderColor: red[500] }} className={`border px-2 py-1 rounded-full text-xs`}>
                    Pending</Box>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    size='small'
                    className='bg-black text-white hover:bg-gray-800'>
                    Status
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}