import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import type { UpdateDetailsFormProps } from "./BusinessDetailsForm";

const PersonalDetailsForm = ({ onClose }: UpdateDetailsFormProps) => {

    const formik = useFormik({
        initialValues: {
            sellerName: '',
            email: '',
            mobile: '',
        },
        validationSchema: Yup.object({
            sellerName: Yup.string().required("Seller Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            mobile: Yup.string().required("Mobile number is required"),
        }),
        onSubmit: (values) => {
            console.log("data ----- ",values);
            onClose();
        },
    });

    useEffect(() => {
       
    }, [formik])

    return (
        <>
            <h1 className="text-xl pb-5 text-center font-bold text-gray-600">
                Personal Details
            </h1>
            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="sellerName"
                    name="sellerName"
                    label="Seller Name"
                    value={formik.values.sellerName}
                    onChange={formik.handleChange}
                    error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
                    helperText={formik.touched.sellerName && formik.errors.sellerName}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Seller Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="mobile"
                    name="mobile"
                    label="Seller Mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <Button sx={{ py: ".9rem" }} color="primary" variant="contained" fullWidth type="submit">
                    Save
                </Button>
            </form>
        </>

    );
};

export default PersonalDetailsForm;
