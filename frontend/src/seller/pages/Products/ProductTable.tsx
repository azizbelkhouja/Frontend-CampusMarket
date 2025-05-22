import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

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

export default function ProductTable() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling Price</StyledTableCell>
            <StyledTableCell align="right">Update Stock</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1,1,1,1,1].map(() => (
            <StyledTableRow key={1}>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-1 flex-wrap">
                  {[1,1,1].map(()=><img src="https://files.refurbed.com/ii/samsung-galaxy-s24-ultra-1705563165.jpg" alt="" className='w-20 rounded-md' />)}
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">s24 ultra</StyledTableCell>
              <StyledTableCell align="right">999€</StyledTableCell>
              <StyledTableCell align="right">899€</StyledTableCell>
              <StyledTableCell align="right">Phantom Black</StyledTableCell>
              <StyledTableCell align="right">{
                <Button size='small' sx={{backgroundColor:"black",color:"white"}}>
                  in stock
                </Button>
              }</StyledTableCell>
              <StyledTableCell align="right">{
                <IconButton size='small' sx={{backgroundColor:"white",color:"black", border:"1px solid black"}}>
                  <Edit/>
              </IconButton>
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

