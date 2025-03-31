import { Button, FormControl, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const accountStatus = [
    { status: 'PENDING_VERIFICATION', title: 'Pending Verification', description: 'The account has been created but is awaiting verification.' },
    { status: 'ACTIVE', title: 'Active', description: 'The account is active and in good standing.' },
    { status: 'SUSPENDED', title: 'Suspended', description: 'The account has been temporarily suspended, possibly due to policy violations.' },
    { status: 'DEACTIVATED', title: 'Deactivated', description: 'The account has been deactivated, either by user request or administrative action.' },
    { status: 'BANNED', title: 'Banned', description: 'The account has been permanently banned due to severe violations of platform policies.' },
    { status: 'CLOSED', title: 'Closed', description: 'The account has been permanently closed, typically at the user’s request.' }
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

const SellersTable = () => {
    const [selectedAccountStatus, setSelectedAccountStatus] = useState("ACTIVE")
    const handleChange = (event: any) => {
        setSelectedAccountStatus(event.target.value);
    }

    return (
        <>
            <div className='pb-5 w-60'>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
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
                        <StyledTableCell>Seller</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
                        <StyledTableCell align="right">Mobile</StyledTableCell>
                        <StyledTableCell align="right">Fiscal Code</StyledTableCell>
                        <StyledTableCell align="right">Business Name</StyledTableCell>
                        <StyledTableCell align="right">Account Status</StyledTableCell>
                        <StyledTableCell align="right">Update Status</StyledTableCell>
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
                            <Button>
                                Update
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
        </>
    )
}

export default SellersTable