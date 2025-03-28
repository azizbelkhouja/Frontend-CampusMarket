import { Button, Step, StepLabel, Stepper } from '@mui/material'
import React, { useState } from 'react'
import BecomeSellerFormStep1 from './BecomeSellerFormStep1';
import { useFormik } from 'formik';
import BecomeSellerFormStep2 from './BecomeSellerFOrmStep2';
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
    // console.log("active step ", activeStep)
  } 
  const handleCreateAccount=()=>{
    console.log("Create Account")
  }

  const formik = useFormik ({
    initialValues: {
      mobile: "",
      otp: "",
      cf: "",
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
  return (
    <div>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          ".MuiStepIcon-root.Mui-active": {
            color: "black",
          },
          ".MuiStepIcon-root.Mui-completed": {
            color: "black",
          },
          ".MuiStepIcon-text": {
            fill: "white",
          },
        }}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <section className='mt-10 space-y-9'>
        <div className="">
          { activeStep==0?<BecomeSellerFormStep1 formik={formik}/>:null }
          { activeStep==1?<BecomeSellerFormStep2 formik={formik}/>:null }
          { activeStep==2?<BecomeSellerFormStep3 formik={formik}/>:null }
          { activeStep==3?<BecomeSellerFormStep4 formik={formik}/>:null }
        </div>
        <div className="flex items-center justify-between">
          <Button variant="contained" sx={{ backgroundColor: "black", color: "white",
                                        "&:hover": { backgroundColor: "#333" },
                                        "&:disabled": { backgroundColor: "#777", color: "#ccc" },
                                      }} 
                  disabled={activeStep === 0} onClick={handleStep(-1)}
          >
            Back
          </Button>
          <Button variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    "&:hover": { backgroundColor: "#333" },
                  }} onClick={handleStep(+1)}
          >
            {activeStep == (steps.length-1) ? "Finish" : "Next"}
          </Button>
        </div>
      </section>
    </div>
  )
}

export default SellerAccountForm