import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton, Modal, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UpdateDealForm from './UpdateDealForm';

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const DealTable = () => {

  const [selectedDealId, setSelectedDealId] = useState<number>();
  const [open, setOpen] = React.useState(false);


  const handleOpen = (id: number | undefined) => () => {
    setSelectedDealId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleDelete = (id: any) => () => {

  }
  useEffect(() => {

  }, [])
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell align="right">Discount</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1,1,1,1].map(() => (
                <StyledTableRow key={1}>
                  <StyledTableCell component="th" scope="row">1</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <img className="w-20 rounded-md" src="https://files.refurbed.com/ii/samsung-galaxy-s24-ultra-1705563165.jpg" alt="" />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <h1 className='text-sm'>Electronics</h1>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    10%
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <IconButton onClick={handleOpen(1)}>
                      <Edit className="text-orange-400 cursor-pointer" />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton onClick={handleDelete(1)}>
                      <Delete className="text-red-600 cursor-pointer" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedDealId && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateDealForm id={selectedDealId} />
        </Box>
      </Modal>}
    </>
  )
}

export default DealTable