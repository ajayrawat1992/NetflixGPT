import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidateData } from '../utils/Validate'
    
    const Login = () => {

        const [isSignInForm,setIsSignInForm]=useState(true)
        const [errorMessage,setErrorMessage]=useState(null)
           const emailid=useRef(null)
           const password=useRef(null)
           const fullName=useRef(null)

           const handleSignUp=()=>
           {
            setIsSignInForm(!isSignInForm)
           }

           const handleCheckError=()=>
           {
           let message= CheckValidateData(emailid.current.value,password.current.value,fullName?.current?.value)
           setErrorMessage(message)           
           }

      return (
        <div>
         <Header/>
         <div className='relative'>
        <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"
        alt="logo">
        </img>    
        </div>
        <form  onSubmit={(e)=>e.preventDefault()} className=' absolute w-3/12 bg-black bg-opacity-70 p-10 my-44 bottom-0  right-[550px] flex flex-col gap-4'>
            <h2 className='text-white font-bold text-3xl'>{isSignInForm ?"Sign In" :"Sign Up"}</h2>
            { !isSignInForm && (
                <input 
                ref={fullName}
                className='p-3 rounded-sm'
                type='text'
                placeholder='Fullname'/>
            )}
            <input
             ref={emailid}
             type='email'
             placeholder='Email or mobile number'
             className='p-3 rounded-sm ' />
            <input 
            type='password'
            ref={password}
             placeholder='Password'
             className='p-3 rounded-sm' />
             
             <p className='text-red-800 font-semibold'>{errorMessage}</p>
            <button 
            onClick={handleCheckError}
            className='bg-red-600 p-3 rounded-sm mt-6 font-semibold text-md'>
            {isSignInForm ?"Sign In" :"Sign Up"}</button>
            {isSignInForm ? ( 
            
            <div className='text-white mt-6'>New to Netflix?
            <span className='font-bold cursor-pointer' onClick={handleSignUp}  >Sign up now
            </span>
            </div>) : (<div className='text-white mt-6'>
    Already Registered?
    <span className='font-bold cursor-pointer'onClick={handleSignUp}>
      Sign in now
    </span>
  </div>)}
            
        </form>
       
        </div>
      )
    }
    
    export default Login    