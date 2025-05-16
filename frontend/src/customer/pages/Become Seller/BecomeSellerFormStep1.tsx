import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep1 = ({formik}:any) => {
  return (
    <div className=''>
        <Box>
            <div className="flex flex-col gap-5">
                <TextField fullWidth label="mobile" name="Mobile" 
                        value={formik.values.mobile} onChange={formik.handleChange} 
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile} 
                />

                <TextField fullWidth label="Fiscal Code" name="Fiscal Code" 
                        value={formik.values.cf} onChange={formik.handleChange} 
                        error={formik.touched.cf && Boolean(formik.errors.cf)}
                        helperText={formik.touched.cf && formik.errors.cf} 
                />
            </div>
        </Box>
    </div>
  )
}

export default BecomeSellerFormStep1