import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep3 = ({formik}:any) => {
  return (
    
    <div className="space-y-5 flex flex-col gap-3">
        <TextField fullWidth label="Account Number" name="bankDetails.accountNumber" 
                value={formik.values.bankDetails.accountNumber} onChange={formik.handleChange} 
                error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
                helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber} 
        />

        <TextField fullWidth label="Fiscal Code" name="bankDetails.fiscalCode" 
                value={formik.values.bankDetails.fiscalCode} onChange={formik.handleChange} 
                error={formik.touched.bankDetails?.fiscalCode && Boolean(formik.errors.bankDetails?.fiscalCode)}
                helperText={formik.touched.bankDetails?.fiscalCode && formik.errors.bankDetails?.fiscalCode} 
        />

        <TextField fullWidth label="Account Holder Name" name="bankDetails.accountHolderName" 
                value={formik.values.bankDetails.accountHolderName} onChange={formik.handleChange} 
                error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
                helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName} 
        />
    </div>
    
  )
}

export default BecomeSellerFormStep3