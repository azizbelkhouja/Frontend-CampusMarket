import { Button, CircularProgress, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OTPInput from '../../components/OtpField/OTPInput';

const SellerLoginForm = () => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [timer, setTimer] = useState<number>(30); // Timer state
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      otp:""
    },
    onSubmit:(values) => {
      console.log("form data", values)
    }
  })

  const handleSendOtp=() => {
    console.log("Send Otp")
  }

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };

const handleResendOTP = () => {
    // Implement OTP resend logic
    console.log('Resend OTP');
    setTimer(30);
    setIsTimerActive(true);
};

const handleSentOtp=()=>{
    setIsOtpSent(true);
    handleResendOTP();
}

const handleLogin=()=>{
    formik.handleSubmit()
}

useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isTimerActive) {
        interval = setInterval(() => {
            setTimer(prev => {
                if (prev === 1) {
                    clearInterval(interval);
                    setIsTimerActive(false);
                    return 30; // Reset timer for next OTP request
                }
                return prev - 1;
            });
        }, 1000);
    }

    return () => {
        if (interval) clearInterval(interval);
    };
}, [isTimerActive]);


  return (
    <div>
      <h1 className='text-center font-bold text-xl text-primary-color pb-5'>Login</h1>
      <form className="space-y-5">
          <TextField
              fullWidth
              name="email"
              label="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email as string : undefined}
          />

          {true && <div className="mt-5">
              <p className="font-medium text-sm">
                  * Enter OTP sent to your email
              </p>
              <OTPInput
                  length={6}
                  onChange={handleOtpChange}
                  error={false}
              />
              <p className="text-xs space-x-2">
                      {isTimerActive ? (
                          <span>Resend OTP in {timer} seconds</span>
                      ) : (
                          <>
                            Didn't receive OTP?{" "}
                            <span 
                                onClick={handleResendOTP} 
                                className="text-[#00B1D3] cursor-pointer hover:text-teal-800 font-semibold"
                            >
                                Resend
                            </span>
                          </>
                      )}
                  </p>
              {formik.touched.otp && formik.errors.otp && <p>{formik.errors.otp as string}</p>}
          </div>}

          {true &&<div>
              <Button onClick={handleLogin} 
              fullWidth className='my-main-button'>Login</Button>
          </div>}

          {!true && <Button
          disabled={!otp}
          fullWidth
          onClick={handleSentOtp}
          className='my-main-button'>{
              false ? <CircularProgress  />: "send otp"}</Button>
          }
      </form>
    </div>
  )
}

export default SellerLoginForm