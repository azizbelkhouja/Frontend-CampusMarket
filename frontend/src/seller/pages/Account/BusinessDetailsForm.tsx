import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

export interface UpdateDetailsFormProps {
  onClose: () => void;
}
const BusinessDetailsForm = ({ onClose }: UpdateDetailsFormProps) => {
 
  const formik = useFormik({
    initialValues: {
      businessName: "",
      gstin: "",
      accountStatus: "",
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business Name is required"),
      gstin: Yup.string().required("CF is required"),
      accountStatus: Yup.string().required("Account Status is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      onClose();
    },
  });

  useEffect(() => {
    
  }, [formik,]);

  return (
    <>
      <h1 className="text-xl pb-5 text-center font-bold text-gray-600">
        Business Details
      </h1>
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="businessName"
          name="businessName"
          label="Business Name"
          value={formik.values.businessName}
          onChange={formik.handleChange}
          error={
            formik.touched.businessName && Boolean(formik.errors.businessName)
          }
          helperText={formik.touched.businessName && formik.errors.businessName}
        />
        <TextField
          fullWidth
          id="fiscalCode"
          name="fiscalCode"
          label="fiscalCode"
          value={formik.values.gstin}
          onChange={formik.handleChange}
          error={formik.touched.gstin && Boolean(formik.errors.gstin)}
          helperText={formik.touched.gstin && formik.errors.gstin}
        />
        <TextField
          fullWidth
          id="accountStatus"
          name="accountStatus"
          label="Account Status"
          value={formik.values.accountStatus}
          onChange={formik.handleChange}
          error={
            formik.touched.accountStatus && Boolean(formik.errors.accountStatus)
          }
          helperText={
            formik.touched.accountStatus && formik.errors.accountStatus
          }
        />
        <Button
          sx={{ py: ".9rem" }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default BusinessDetailsForm;
