import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@mui/material";

const validationSchema = Yup.object({
    discount: Yup.number()
        .required("Discount is required")
        .min(0, "Discount must be a positive number")
        .max(100, "Discount cannot exceed 100"),
});

const initialValues = {
    discount: 0,
    category: "",
};

const UpdateDealForm = ({ id }: { id: number }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log("Deal submit", values);
        },
    });

    useEffect(() => {
        
    }, []);

    return (
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <Typography align="center" variant="h4" gutterBottom>
            Update Deal
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

            <Button
                sx={{ py: ".8rem", backgroundColor: "black", color: "white" }}
                variant="contained"
                fullWidth
                type="submit"
            >
                Update Deal
            </Button>
        </form>
    );
};

export default UpdateDealForm;
