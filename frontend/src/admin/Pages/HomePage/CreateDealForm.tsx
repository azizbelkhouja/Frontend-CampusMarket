import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React from 'react';

const CreateDealForm = () => {

    const formik = useFormik({
        initialValues: {
            discount: 0,
            category: ""
        },
        validationSchema: Yup.object({
            discount: Yup.number()
                .min(1, "Discount must be at least 1%")
                .max(100, "Discount cannot exceed 100%")
                .required("Discount is required"),
            category: Yup.string().required("Category is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ maxWidth: 500, margin: "auto", padding: 3 }}
            className="space-y-6"
        >
            <Typography className='text-center' variant="h4" gutterBottom>
                New Deal
            </Typography>

            <TextField
                fullWidth
                id="discount"
                name="discount"
                label="Discount"
                type="number"
                value={formik.values.discount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.discount && Boolean(formik.errors.discount)}
                helperText={formik.touched.discount && formik.errors.discount}
            />

            <FormControl
                fullWidth
                error={formik.touched.category && Boolean(formik.errors.category)}
                required
            >
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    label="Category"
                >
                    {[1,1,1].map((item) => (
                        <MenuItem key={1} value={1}>2255</MenuItem>
                    ))}
                    </Select>
                    {formik.touched.category && formik.errors.category && (
                    <FormHelperText>{formik.errors.category}</FormHelperText>
                    )}
            </FormControl>

            <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ py: ".9rem", backgroundColor: "black", color: "white", borderRadius: "0" }}
            >
                Add
            </Button>
        </Box>
    );
};

export default CreateDealForm;
