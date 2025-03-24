import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange = (event:any) => {
        console.log(event.target.checked)
    }

  return (
    <div className='p-5 border rounded-md flex'>
        <div className="">
            <Radio 
                sx={{ color: "black", '&.Mui-checked': { color: "black" } }}
                checked={true}
                onChange={handleChange}
                value=""
                name='radio-button'
            />
        </div>

        <div className="space-y-3 pt-3">
            <h1>Aziz</h1>
            <p className="w-[320px]">
                Via Sagrat 1111, 44111 Ferrara, Italy
            </p>
            <p>
                <strong>Phone:</strong> +39 333 333 3333
            </p>
        </div>
    </div>
  )
}

export default AddressCard