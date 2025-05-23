import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import type { UpdateDetailsFormProps } from "./BusinessDetailsForm";

const BankDetailsForm = ({ onClose }: UpdateDetailsFormProps) => {

  const formik = useFormik({
    initialValues: {
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
    },
    validationSchema: Yup.object({
      accountHolderName: Yup.string().required(
        "Account Holder Name is required"
      ),
      accountNumber: Yup.string().required("Account Number is required"),
      ifscCode: Yup.string().required("IBAN is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      onClose();
    },
  });

  useEffect(() => {
    
  }, [formik]);

  return (
    <>
      <h1 className="text-xl pb-5 text-center font-bold text-gray-600">
        Bank Details
      </h1>
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="accountHolderName"
          name="accountHolderName"
          label="Account Holder Name"
          value={formik.values.accountHolderName}
          onChange={formik.handleChange}
          error={
            formik.touched.accountHolderName &&
            Boolean(formik.errors.accountHolderName)
          }
          helperText={
            formik.touched.accountHolderName && formik.errors.accountHolderName
          }
        />
        <TextField
          fullWidth
          id="accountNumber"
          name="accountNumber"
          label="Account Number"
          value={formik.values.accountNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.accountNumber && Boolean(formik.errors.accountNumber)
          }
          helperText={
            formik.touched.accountNumber && formik.errors.accountNumber
          }
        />
        <TextField
          fullWidth
          id="IBAN"
          name="IBAN"
          label="IBAN"
          value={formik.values.ifscCode}
          onChange={formik.handleChange}
          error={formik.touched.ifscCode && Boolean(formik.errors.ifscCode)}
          helperText={formik.touched.ifscCode && formik.errors.ifscCode}
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

export default BankDetailsForm;
