import { Radio } from '@mui/material'
import React from 'react'

interface AddressCardProps {
    value: number;
    selectedValue: number;
    handleChange: (e: any) => void;
    item: Address
}

const AddressCard = () => {

    return (
        <div className='p-5 border rounded-md flex '>
            <div>
                <Radio
                    checked={false}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>

            <div className='space-y-3 pt-3'>
                <h1>Aziz Belkhouja</h1>
                <p className='w-[320px]'>
                    Via Cento,
                    Emilia Romagna,
                    Ferrara,
                    Italy - 39</p>
                <p><strong>Mobile: </strong>+391111111111</p>
            </div>
        </div>
    )
}
export default AddressCard