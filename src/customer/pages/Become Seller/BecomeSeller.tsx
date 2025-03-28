import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);
    const handleShowPage = () => {
        setIsLogin(!isLogin);
    }

  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md">
            { !isLogin ? <SellerAccountForm /> : <SellerLoginForm /> }

            <div className="mt-10 space-y-2">
                <h1 className="text-center text-sm font-medium">{ isLogin? "Don't Have An Account ?" : "Already Have An Account ?" }</h1>
                <Button fullWidth onClick={handleShowPage} variant="outlined" 
                    sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "black",
                    "&:hover": { backgroundColor: "black", color: "white" },
                    }}
                >
                    { isLogin? "Create Account" : "Login" }
                </Button>
            </div>
        </section>
        <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
            <div className="lg:w-[70%] px-5 space-y-10">
                <div className="space-y-2 font-bold text-center">
                    <p className="text-2xl">Join Us !</p>
                    <p className="text-lg text-gray-400">Start Flipping Today</p>
                </div>
                <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </section>
    </div>
  )
}

export default BecomeSeller