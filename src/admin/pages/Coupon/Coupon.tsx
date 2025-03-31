import { DeleteOutline } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const accountStatus = [
  { status: 'ACTIVE', title: 'Active', description: 'The coupon is valid and can be used for discounts.' },
  { status: 'EXPIRED', title: 'Expired', description: 'The coupon has passed its validity period and can no longer be used.' },
  { status: 'REDEEMED', title: 'Redeemed', description: 'The coupon has already been used and is no longer valid.' },
  { status: 'PENDING_ACTIVATION', title: 'Pending Activation', description: 'The coupon has been issued but is not yet active for use.' },
  { status: 'DISABLED', title: 'Disabled', description: 'The coupon has been manually disabled and cannot be used.' },
  { status: 'INVALID', title: 'Invalid', description: 'The coupon code is incorrect or does not exist.' }
];

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

function createData(
name: string,
calories: number,
fat: number,
carbs: number,
protein: number,
) {
return { name, calories, fat, carbs, protein };
}

const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Coupon = () => {
    const [selectedAccountStatus, setSelectedAccountStatus] = useState("ACTIVE")
    const handleChange = (event: any) => {
        setSelectedAccountStatus(event.target.value);
    }

    return (
        <>
            <div className='pb-5 w-60'>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Coupon Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedAccountStatus}
                        label="Account Status"
                        onChange={handleChange}
                    >
                        {
                            accountStatus.map((item) => (
                                <MenuItem key={item.status} value={item.status}>
                                    {item.title}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

            </div>

            <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Coupon Code</StyledTableCell>
                        <StyledTableCell>Start Date</StyledTableCell>
                        <StyledTableCell align="right">Expiry Date</StyledTableCell>
                        <StyledTableCell align="right">Min Order Value</StyledTableCell>
                        <StyledTableCell align="right">Discount %</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Delete</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell>{row.calories}</StyledTableCell>
                          <StyledTableCell align="right">{row.fat}</StyledTableCell>
                          <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="right">{row.protein}</StyledTableCell>
                          <StyledTableCell align="right">{row.protein}</StyledTableCell>
                          <StyledTableCell align="right">
                            <DeleteOutline />
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
        </>
    )
}

export default Coupon