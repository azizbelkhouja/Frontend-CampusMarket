import { Button, FormControl, InputLabel, Menu, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchSellers, updateSellerAccountStatus } from '../../../State/seller/sellerSlice';

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

const SellersTable = () => {
    const [selectedAccountStatus, setSelectedAccountStatus] = useState("ACTIVE")
    const  sellers  = useAppSelector(store => store.sellers);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(fetchSellers(selectedAccountStatus))
    }, [selectedAccountStatus, dispatch])

    const handleAccountStatusChange = (event: any) => {
        setSelectedAccountStatus(event.target.value as string);
    }

    const handleUpdateSellerAccountStatus = (id: number, status: string) => {
        dispatch(updateSellerAccountStatus({ id, status }))
    }

    const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: HTMLElement | null }>({});
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, sellerId: any) => {
        setAnchorEl((prev) => ({ ...prev, [sellerId]: event.currentTarget }));
    };
    const handleClose = (sellerId: number) => {
        setAnchorEl((prev) => ({ ...prev, [sellerId]: null }));
    };



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
                        onChange={handleAccountStatusChange}
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
                        <StyledTableCell align="right">Displayed Name</StyledTableCell>
                        <StyledTableCell align="right">Account Status</StyledTableCell>
                        <StyledTableCell align="right">Update Status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {/**temporary */}
                        <StyledTableRow key="mario_rossi">
                        <StyledTableCell component="th" scope="row">
                            Mario Rossi
                        </StyledTableCell>
                        <StyledTableCell>mario.rossi@example.com</StyledTableCell>
                        <StyledTableCell>+39 345 123 4567</StyledTableCell>
                        <StyledTableCell>RSSMRA80A01H501U</StyledTableCell>
                        <StyledTableCell>Rossi Enterprises</StyledTableCell>
                        <StyledTableCell align="right">ACTIVE</StyledTableCell>
                        <StyledTableCell align="right">
                            <Button id="basic-button1" onClick={(e) => handleClick(e, 1)}>Change Status</Button>
                            <Menu
                            id="basic-menu1"
                            anchorEl={anchorEl[1]}
                            open={Boolean(anchorEl[1])}
                            onClose={() => handleClose(1)}
                            >
                            {accountStatus.map((status) =>
                                <MenuItem onClick={() => handleUpdateSellerAccountStatus(1, status.status)} value={status.status}>
                                {status.title}
                                </MenuItem>
                            )}
                            </Menu>
                        </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow key="giulia_bianchi">
                        <StyledTableCell component="th" scope="row">
                            Giulia Bianchi
                        </StyledTableCell>
                        <StyledTableCell>giulia.bianchi@example.com</StyledTableCell>
                        <StyledTableCell>+39 348 765 4321</StyledTableCell>
                        <StyledTableCell>BNCGLL85C41F205X</StyledTableCell>
                        <StyledTableCell>Bianchi Studio</StyledTableCell>
                        <StyledTableCell align="right">ACTIVE</StyledTableCell>
                        <StyledTableCell align="right">
                            <Button id="basic-button2" onClick={(e) => handleClick(e, 2)}>Change Status</Button>
                            <Menu
                            id="basic-menu2"
                            anchorEl={anchorEl[2]}
                            open={Boolean(anchorEl[2])}
                            onClose={() => handleClose(2)}
                            >
                            {accountStatus.map((status) =>
                                <MenuItem onClick={() => handleUpdateSellerAccountStatus(2, status.status)} value={status.status}>
                                {status.title}
                                </MenuItem>
                            )}
                            </Menu>
                        </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow key="luca_verdi">
                        <StyledTableCell component="th" scope="row">
                            Luca Verdi
                        </StyledTableCell>
                        <StyledTableCell>luca.verdi@example.com</StyledTableCell>
                        <StyledTableCell>+39 320 987 6543</StyledTableCell>
                        <StyledTableCell>VRDLUC90D10C351Y</StyledTableCell>
                        <StyledTableCell>Verdi Solutions</StyledTableCell>
                        <StyledTableCell align="right">ACTIVE</StyledTableCell>
                        <StyledTableCell align="right">
                            <Button id="basic-button3" onClick={(e) => handleClick(e, 3)}>Change Status</Button>
                            <Menu
                            id="basic-menu3"
                            anchorEl={anchorEl[3]}
                            open={Boolean(anchorEl[3])}
                            onClose={() => handleClose(3)}
                            >
                            {accountStatus.map((status) =>
                                <MenuItem onClick={() => handleUpdateSellerAccountStatus(3, status.status)} value={status.status}>
                                {status.title}
                                </MenuItem>
                            )}
                            </Menu>
                        </StyledTableCell>
                        </StyledTableRow>

                        {/**temporary */}
                        {sellers.sellers?.map((seller) => (
                            <StyledTableRow key={seller.sellerName}>
                                <StyledTableCell component="th" scope="row">
                                    {seller.sellerName}
                                </StyledTableCell>
                                <StyledTableCell >{seller.email}</StyledTableCell>
                                <StyledTableCell >{seller.mobile}</StyledTableCell>
                                <StyledTableCell >{seller.cf}</StyledTableCell>
                                <StyledTableCell >{seller.businessDetails?.businessName}</StyledTableCell>
                                <StyledTableCell align="right">{seller.accountStatus}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button id={"basic-button" + seller.id} onClick={(e) => handleClick(e, seller.id)}>Change Status</Button>
                                    <Menu
                                        id={"basic-menu" + seller.id}
                                        anchorEl={anchorEl[seller.id || 1]}
                                        open={Boolean(anchorEl[seller.id || 1])}
                                        onClose={() => handleClose(seller.id || 1)}
                                    >
                                        {accountStatus.map((status) =>
                                            <MenuItem onClick={() => handleUpdateSellerAccountStatus(
                                                seller.id || 1, status.status)} value={status.status}>{status.title}
                                            </MenuItem>)
                                        }
                                    </Menu>
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