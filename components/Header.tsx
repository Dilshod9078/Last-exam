"use client";

import Link from 'next/link'
import React, { ChangeEventHandler, useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import {Basketicon, LoginIcon, NavbarIcons, Searchicon, ExitICons} from '@/assets/Icons'
import { Button } from './Button'
import { usePathname } from 'next/navigation';
import Modal from '../components/Modal/Modal'
import { Badge, Input } from 'antd';
import axios from 'axios';
import { URLLOCAL } from '@/service/request';
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '@/context/context';

interface NavbarType {
  id: number;
  title: string;
  path: string;
  isActive: boolean;
}

const Header = () => {
  
  
  const pathName = usePathname()
  const {basketArr} = useContext(Context)

  const navList = [
    {
      id: 1,
      title: 'Home',
      path: '/',
      isActive:pathName == "/" ? true : false
    },
    {
      id: 2,
      title: 'Shop',
      path: '/shop',
      isActive:pathName == "/shop" ? true : false
    },
    {
      id: 3,
      title: 'Plant Care',
      path: '/plant',
      isActive:pathName == "/plant" ? true : false
    },
    {
      id: 4,
      title: 'Blogs',
      path: '/blogs',
      isActive:pathName == "/blogs" ? true : false
    }
  ]

  const token = window.localStorage.getItem("token")

  const [searchShow, setSearchShow] = useState<boolean>(false)
  const [modal, setModal] = useState<boolean>(false)
  const handleSearch: ChangeEventHandler<HTMLInputElement>  = () => {
    setTimeout(() => {
      setSearchShow(false)
    }, 4000)
  }

  const close = (e:React.MouseEvent) => {
    if((e.target as HTMLButtonElement).id == "wrapperID"){
      setModal(false)
    }
  }

  //Modal
  
  const [showModal, setShowModal] = useState<boolean>(false)
  const [login, setLogin] = useState<string>("Login")
 
  // Login

  const [emailLog, setEmailLog] = useState<string>("")
  const [passLog, setPassLog] = useState<string>("")

  const handleClickLogin = () => {
   const loginData =  {
    password:passLog,
    usernameoremail: emailLog
  }
  try{
    axios.post(`${URLLOCAL}/login`, loginData).then((response) => {      
      window.localStorage.setItem("token", response.data.access_token)     
      toast.success("Welcome " + response.data.first_name)
      setShowModal(false)
      setEmailLog("")
      setPassLog("")
    })
  } 
  catch(err){
  console.log(err)
  } 
  }

  // Register

  const [emailReg, setEmailReg] = useState<string>("")
  const [firstNameReg, setFirstNameReg] = useState<string>("")
  const [lastNameReg, setLastNameReg] = useState<string>("")
  const [passwordReg, setPasswordReg] = useState<string>("")
 
  const handleClickRegister = () => {
    const registerData = {
      email: emailReg,
      firstName:firstNameReg,
      lastName:lastNameReg,
      password:passwordReg
    }
    try{
      axios.post(`${URLLOCAL}/register`, registerData).then((response) => {
        toast.success("A code has been sent to your email address!")
      setTimeout(() => {
        setLogin("codeRegisterSend")
        setEmailLog(emailReg)
      }, 400);
      })
    } 
    catch(err){
    console.log(err)
    } 
  }


// Register Code 

const [registerCode, setRegisterCode] = useState<string>("")
const handleRegisterBtn = () => {
  const registerData = {
    email:emailReg,
    code:registerCode
  }
  try{
    axios.post(`${URLLOCAL}/users/verify`, {}, {
      params: registerData
    }).then((response) => {
      toast.success("You have successfully registered!")
      setTimeout(() => {
        setLogin("Login")
      setEmailReg("")
      setFirstNameReg("")
      setLastNameReg("")
      setPasswordReg("")
      }, 400);
    })
  } 
  catch(err){
  console.log(err)
  }
}

   // Forgot email Login

   const [forgotEmailLogin, setForgotEmailLogin] = useState<string>("")
   const forgotEmailClick = () => {
    axios.post(`${URLLOCAL}/forgot/${forgotEmailLogin}`).then(res => {
      setLogin("Forgot")
    })
   }

  //  Forgot email

  const [forgotpassCode, setForgotPassCode] = useState<string>("")
  const handleForgotPassCode = () => {
    axios.post(`${URLLOCAL}/verify`, {}, {
      params: {
        email:forgotEmailLogin,
        otp:forgotpassCode
      }
    }).then(res => {
      toast.success("A password reset code has been sent to your email address!")
      setTimeout(() => {
        setLogin("ForgotPassword")
      }, 400);
    })
  }

  //  Forgot password

  const [forgotResetPass, setForgotResetPass]  = useState<string>("")

  const forgotResetClickBtn = () => {
    const data = {
      email:forgotEmailLogin,
      new_password:forgotResetPass,
      otp: forgotpassCode
    }
    try{
      axios.put(`${URLLOCAL}/reset-password`, data).then((response) => {
        toast.success("Password updated!")
        setTimeout(() => {
          setLogin("Login")
          setEmailLog(forgotEmailLogin)
        }, 400);
      })
    } 
    catch(err){
    console.log(err)
    } 
  }



  return (
    <div className='pt-[41px] md:pt-[25px]'>
      <Toaster position="top-center" reverseOrder={false}/>
    <div className="container px-[24px] gap-[8px] md:gap-0 md:px-0 flex items-center justify-between md:border-b-[0.3px]  md:border-[#46A35880]">
    <Link className={`hidden md:block ${searchShow ? "pb-[11px]" : "pb-[17px]"}`} href={'/'}>
    <img src={`/site-logo.svg`} alt="site logo" width={150} height={34.3} />
    </Link>
    <Navbar searchShow={searchShow}/>
    <div className={`hidden md:flex items-center ${searchShow ? "pb-[11px]" : "pb-[17px]"}  space-x-[31px]`}>
    <button className='flex items-center space-x-[2px]' onClick={() => setSearchShow(true)}>
    {!searchShow && <Searchicon/> }
    <input onChange={handleSearch} className={` ${searchShow ? "py-[15px] pl-[41px]  pr-[10px] w-[313px]" : "w-[0px]"} search-plant  outline-none focus:shadow-md focus:shadow-[#46A358] text-[#A5A5A5] text-[14px] font-normal placeholder:leading-[16px] duration-300 rounded-[10px] bg-[#F8F8F8]`} type="text" name='searchPlant' placeholder='Find your plants' aria-label='Find your plants' />
    </button>
     <Badge style={{color:"white", backgroundColor:"#46A358"}} count={basketArr?.length}>
      <Link href={'/shop/order'}>
      <Basketicon/>
      </Link>
     </Badge>
    <Button onclick={() => setShowModal(true)} btnBg={false} title='Login' icon={<LoginIcon/>} buttonWidth={100} padT={8} padB={7} position='prev'/>
    </div>
    <input className={` md:hidden search-plant  outline-none focus:shadow-md focus:shadow-[#46A358] text-[#A5A5A5] py-[15px] pl-[41px]  pr-[10px] w-[88%] text-[14px] font-normal placeholder:leading-[16px] duration-300 rounded-[10px] bg-[#F8F8F8]`} type="text" name='searchPlant' placeholder='Find your plants' aria-label='Find your plants' />
    <button onClick={() => setModal(true)} className=' md:hidden w-[45px] h-[45px] opacity-90 rounded-[14px] bg-[#46A358] flex items-center justify-center'>
    <NavbarIcons/>
    </button>
    </div>
    <div onClick={close} id='wrapperID' className={`${modal ? "right-0" : "right-[-100%]"} wrapper fixed duration-300 top-0 z-20 backdrop-blur-lg w-full h-[100vh]`}>
    <div className={`absolute w-[80%] duration-300 h-[100vh] bg-green-300 ${modal ? "right-0" : "right-[-100%]"}`}>
    <button onClick={() => setModal(false)} className='w-[30x] h-[30px] px-4 pt-[10px]'>
    <ExitICons/>
    </button>
        <ul className={`flex flex-col items-start px-4 space-y-2 w-full `}>
        {navList.map((item:NavbarType) => (
          <li className={`${item.isActive ? "py-3 bg-white px-2 rounded-md w-full" : "py-3 px-2" }  duration-300 `} key={item.id}>
          <Link onClick={() => setModal(false)} className={` text-[20px] duration-300 font-medium leading-[24px]`} href={item.path}>{item.title}</Link>
          </li>
        ))}
        </ul>
    </div>
    </div>

    <Modal showModal={showModal} setShowModal={setShowModal} >
    <div className='w-[500px] mx-auto my-auto bg-white  relative'>
    <div className='pt-[50px] px-[100px] pb-[58px]'>
    <button onClick={() => setShowModal(false)} className='absolute top-[10px] right-[10px]'>
      <img src={'/exit.svg'} alt="Exit icons" width={18} height={18} />
    </button>
       <div className={`flex items-center justify-center space-x-[13px] ${login == "ForgotEmail" || login == "codeRegisterSend" || login == "ForgotPassword"  ? "mb-[25px]" : "mb-[53px]"}`}>
          <h2 onClick={() => setLogin("Login")} className={`${login == "Login" ? "text-[#46A358]" : ""} text-[#3D3D3D] cursor-pointer text-[20px] leading-[16px] font-medium`}>Login</h2>
          <span className='w-[1px] h-[16px] block bg-[#3D3D3D]'></span>
          <h2 onClick={() => setLogin("Register")} className={`${login == "Register" ? "text-[#46A358]" : ""} text-[#3D3D3D] cursor-pointer text-[20px] leading-[16px] font-medium`}>Register</h2>
       </div>
       { login == "Login" && 
       <>
       <p className='text-[#3D3D3D] text-[13px] leading-[16px] mb-[14px]'>Enter your username and password to login.</p>
        <div className='flex flex-col space-y-[17px] mb-[14px]'>
          <input value={emailLog} onChange={(evt) => setEmailLog(evt.target.value)} type="email" required className='w-[300px] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='almamun_uxui@outlook.com' />
          <input value={passLog} onChange={(evt) => setPassLog(evt.target.value)} type="password" required className='w-[300px] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='***********' />
        </div>
          <div className='flex items-end justify-end mb-[27px]'>
            <button onClick={() => setLogin("ForgotEmail")} className='text-[#46A358] text-[14px] leading-[16px]'>Forgot Password?</button>
          </div>
          <button onClick={handleClickLogin} className='pt-[16px] pb-[13px] text-center bg-[#46A358] w-[300px] mt-[10px] text-white rounded-[5px] font-bold text-[16px] leading-[16px]'>Login</button>
       </>
       }
        {
        login == "Register" && 
       <>
       <p className='text-[#3D3D3D] text-[13px] leading-[16px] mb-[14px]'>Enter your email and password to register.</p>
        <div className='flex flex-col space-y-[17px] mb-[14px]'>
          <input value={emailReg} onChange={(evt) => setEmailReg(evt.target.value)} type="email" required className='w-[300px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='Enter your email address' />
          <input value={firstNameReg} onChange={(evt) => setFirstNameReg(evt.target.value)} type="text" required className='w-[300px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='Enter your first name' />
          <input value={lastNameReg} onChange={(evt) => setLastNameReg(evt.target.value)} type="text" required className='w-[300px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='Enter your last name' />
          <input value={passwordReg} onChange={(evt) => setPasswordReg(evt.target.value)} type="password" required className='w-[300px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='Enter your password' />
        </div>
          <button onClick={handleClickRegister} className='pt-[16px] pb-[13px] text-center bg-[#46A358] w-[300px] mt-[10px] text-white rounded-[5px] font-bold text-[16px] leading-[16px]'>Register</button>
       </>
       }
       {
        login == "ForgotEmail" && 
        <>
          <input value={forgotEmailLogin} onChange={(evt) => setForgotEmailLogin(evt.target.value)} type="email" required className='w-[300px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='Enter your email address' />
          <button onClick={forgotEmailClick} className='pt-[16px] pb-[13px] text-center bg-[#46A358] w-[300px] mt-[20px] text-white rounded-[5px] font-bold text-[16px] leading-[16px]'>Send code</button>
        </>
       }
        {
        login == "Forgot" && 
        <>
          <Input.OTP value={forgotpassCode} onChange={(e) => setForgotPassCode(e)} length={6} size='large'/>
          <button onClick={handleForgotPassCode} className='pt-[16px] pb-[13px] text-center bg-[#46A358] w-[300px] mt-[20px] text-white rounded-[5px] font-bold text-[16px] leading-[16px]'>Reset password</button>
        </>
       }
       { login == "ForgotPassword" &&
         <>
          <input value={forgotResetPass} onChange={(evt) => setForgotResetPass(evt.target.value)} type="password" required className='w-[300px] py-[12px] pl-[14px] border-[1px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:leading-[16px] focus:shadow-md focus:shadow-[#46A358] rounded-[5px]' placeholder='Enter new password' />
          <button onClick={forgotResetClickBtn} className='pt-[16px] pb-[13px] text-center bg-[#46A358] w-[300px] mt-[20px] text-white rounded-[5px] font-bold text-[16px] leading-[16px]'>Create password</button>
         </>
       }
         {
        login == "codeRegisterSend" && 
        <>
          <Input.OTP value={registerCode} onChange={(evt) => setRegisterCode(evt)} length={6} size='large'/>
          <button onClick={handleRegisterBtn} className='pt-[16px] pb-[13px] text-center bg-[#46A358] w-[300px] mt-[20px] text-white rounded-[5px] font-bold text-[16px] leading-[16px]'>Enter code</button>
        </>
       }
    </div>
       <span className='block w-full bg-[#46A356] h-[10px]'></span>
   </div>
      </Modal>
    </div>
  )
}

export default Header