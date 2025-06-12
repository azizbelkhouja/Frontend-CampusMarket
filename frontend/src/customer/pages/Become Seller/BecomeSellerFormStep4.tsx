import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep4 = ({formik}:any) => {
  
  return (
    <div className='space-y-5 flex flex-col gap-3'>
        <TextField
          fullWidth
          name="preferredname"
          label="Display Name"
          value={formik.values.preferredname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.preferredname && Boolean(formik.errors.preferredname)}
          helperText={formik.touched.preferredname && formik.errors.preferredname}
        />

        <TextField
        fullWidth
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
        fullWidth
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched?.password && Boolean(formik.errors.password)}
        helperText={formik.touched?.password && formik.errors.password}
        />
    </div>
  )
}

export default BecomeSellerFormStep4