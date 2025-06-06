import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import OTPInput from '../../../customer/components/OtpField/OTPInput';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { sendLoginSignupOtp, signin } from '../../../State/AuthSlice';

const AdminLoginForm = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [timer, setTimer] = useState<number>(30); // Timer state
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector(store => store)

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },

        onSubmit: (values: any) => {
            // Handle form submission
            dispatch(signin({ email: values.email, otp, navigate }))
            console.log('Form data:', values);
        }
    });

    const handleOtpChange = (otp: any) => {

        setOtp(otp);

    };

    const handleResendOTP = () => {
        // Implement OTP resend logic
        dispatch(sendLoginSignupOtp({ email: "signing_"+formik.values.email }))
        console.log('Resend OTP');
        setTimer(30);
        setIsTimerActive(true);
    };

    const handleSentOtp = () => {
        setIsOtpSent(true);
        handleResendOTP();
    }

    const handleLogin = () => {
        formik.handleSubmit()
    }

    useEffect(() => {
        let interval: number | undefined;

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
            <h1 className='text-center font-bold text-xl text-[#213D72] pb-8'>Login</h1>
            <form className="space-y-2">
                <TextField
                sx={{ mb: "10px" }}
                fullWidth
                name="email"
                label="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email ? formik.errors.email as string : undefined}
                />
                {auth.otpSent && <div className="space-y-2">
                    <p className="font-medium text-sm">
                        * Enter OTP sent to your mobile number
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
                                    className="text-[#00B1D3] cursor-pointer hover:text-[#213D72] font-semibold"
                                >
                                    Resend OTP
                                </span>
                            </>
                        )}
                    </p>
                    {formik.touched.otp && formik.errors.otp && <p>{formik.errors.otp as string}</p>}
                </div>}

                {auth.otpSent && <div>
                    <Button disabled={auth.loading} onClick={handleLogin}
                        fullWidth className='my-main-button'>{auth.loading ? <CircularProgress  size="small"
                            sx={{ width: "27px", height: "27px" }}/>: "Login"}
                    </Button>
                </div>}

                {!auth.otpSent && 
                    <Button
                        disabled={auth.loading}
                        fullWidth
                        className='my-main-button'
                        onClick={handleSentOtp}
                    > {auth.loading ? <CircularProgress size="small"
                        sx={{ width: "27px", height: "27px" }} />: "send otp"}
                    </Button>
                }
            </form>
        </div>
    )
}

export default AdminLoginForm