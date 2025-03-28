import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const SellerLoginForm = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      otp:""
    },
    onSubmit:(values) => {
      console.log("form data", values)
    }
  })

  return (
    <div>

      <h1 className="text-center text-xl font-bold pb-5">Login</h1>

      <div className="space-y-5">
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
        { true && 
          <div className="space-y-2">
            <TextField
              fullWidth
              name="otp"
              label="Otp sent to your email"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched.otp && formik.errors.otp}
            />
          </div>
        }
      </div>

    </div>
  )
}

export default SellerLoginForm