import { Box, Button, CircularProgress, Grid2, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

interface CouponFormValues {
  code: string;
  discountPercentage: number;
  validityStartDate: Dayjs | null;
  validityEndDate: Dayjs | null;
  minimumOrderValue: number;
}

const AddNewCouponForm = () => {

  const formik = useFormik<CouponFormValues> ({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Coupon code is required")
        .min(3, "Code should be at least 3 characters")
        .max(20, "Code should be at most 20 characters"),
      discountPercentage: Yup.number()
        .required("Discount percentage is required")
        .min(1, "Discount should be at least 1%")
        .max(100, "Discount cannot exceed 100%"),
      validityStartDate: Yup.date()
        .nullable()
        .required("Start date is required")
        .typeError("Invalid date"),
      validityEndDate: Yup.date()
        .nullable()
        .required("End date is required")
        .typeError("Invalid date")
        .min(
          Yup.ref("validityStartDate"),
          "End date cannot be before start date"
        ),
      minimumOrderValue: Yup.number()
        .required("Minimum order value is required")
        .min(1, "Minimum order value should be at least 1"),
    }),
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        validityStartDate: values.validityStartDate
          ? values.validityStartDate.toISOString()
          : null,
        validityEndDate: values.validityEndDate
          ? values.validityEndDate.toISOString()
          : null,
      };
      console.log("Form Values:", formattedValues);
    },
  });


  return (
    <div>
      <div className="w-full h-full flex justify-center items-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{xs:12, sm:6}}>
              <TextField
                fullWidth
                id="code"
                name="code"
                label="Coupon Code"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
                margin="normal"
              />
            </Grid2>
            <Grid2 size={{xs:12, sm:6}}>
              <TextField
                fullWidth
                id="discountPercentage"
                name="discountPercentage"
                label="Discount Percentage"
                type="number"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.discountPercentage &&
                  Boolean(formik.errors.discountPercentage)
                }
                helperText={
                  formik.touched.discountPercentage &&
                  formik.errors.discountPercentage
                }
                margin="normal"
              />
            </Grid2>
            <Grid2 size={{xs:12, sm:6}}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Validity Start Date"
                value={formik.values.validityStartDate}
                onChange={(date) =>
                  formik.setFieldValue("validityStartDate", date)
                }
              />
            </Grid2>
            <Grid2 size={{xs:12, sm:6}}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Validity End Date"
                value={formik.values.validityEndDate}
                onChange={(date) =>
                  formik.setFieldValue("validityEndDate", date)
                }
              />
            </Grid2>
            <Grid2 size={{xs:12}}>
              <TextField
                fullWidth
                id="minimumOrderValue"
                name="minimumOrderValue"
                label="Minimum Order Value"
                type="number"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.minimumOrderValue &&
                  Boolean(formik.errors.minimumOrderValue)
                }
                helperText={
                  formik.touched.minimumOrderValue &&
                  formik.errors.minimumOrderValue
                }
                margin="normal"
              />
            </Grid2>
            <Grid2  size={{xs:12}}>
              <Button
                type="submit"
                sx={{ mt: 2, backgroundColor: "black", color: "white" }}
                fullWidth
              >
                  Create Coupon
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </LocalizationProvider>
    </div>
    </div>
  )
}

export default AddNewCouponForm