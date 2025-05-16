import { Button, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import BecomeSellerFormStep1 from './BecomeSellerFormStep1';
import { useFormik } from 'formik';
import BecomeSellerFormStep2 from './BecomeSellerFormStep2';
import BecomeSellerFormStep4 from './BecomeSellerFormStep4';
import BecomeSellerFormStep3 from './BecomeSellerFormStep3';

const steps=[
  "Mobile & Tax Details",
  "Pickup Address",
  "Bank Account",
  "Supplier Information",
]

const SellerAccountForm = () => {

  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (value:number) => () => {
    (activeStep < steps.length-1 || (activeStep > 0 && value==-1)) && setActiveStep(activeStep + value);
    activeStep == (steps.length-1) && handleCreateAccount();
  } 
  const handleCreateAccount=()=>{
    console.log("Create Account")
  }

  const [otp, setOpt] = useState<any>();

  const formik = useFormik ({
    initialValues: {
      mobile: "",
      otp: "",
      cf: "",
      gstin: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
      },
      sellerName: "",
      email: "",
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: ""
      },
      password:""
    },
    onSubmit: (values) => {
      console.log(values, "formik submitted");
    },
  });

  const handleOtpChange = (otpValue: string) => {
    setOpt(otpValue);
    console.log(otpValue);
    // formik.setFieldValue("opt",otpValue)
  };

  const handleSubmit = () => {
    //submit form data to server
    formik.handleSubmit();
    console.log("Form Submitted");
  };

  return (
    <div>
      <Stepper
        activeStep={3}
        alternativeLabel
        sx={{
          ".MuiStepIcon-root.Mui-active": {
            color: "#213D72",
          },
          ".MuiStepIcon-root.Mui-completed": {
            color: "#213D72",
          },
          ".MuiStepIcon-text": {
            fill: "white",
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <section className='mt-10 space-y-9'>
        <div className="">
          <BecomeSellerFormStep4 formik={formik}/>
        </div>
        <div className="flex items-center justify-between">
          <Button
            className='my-main-button'
            disabled={activeStep === 0} onClick={handleStep(-1)}
          >
            Back
          </Button>
          <Button 
            className='my-main-button'
            disabled={false}
            onClick={
                activeStep === steps.length - 1
                    ? handleSubmit
                    : () => handleStep(1)
            }
          >
            {activeStep == (steps.length-1) ? "Finish" : "Next"}
          </Button>
        </div>
      </section>
    </div>
  )
}

export default SellerAccountForm