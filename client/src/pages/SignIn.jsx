import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Loading } from '../Compontens/Loading';
import { useDispatch, useSelector } from 'react-redux';
import {
    signInStart,
    signInSuccess,
    signInFailure
} from "../redux/user/userSlice.js";

export const SignIn = () => {
    const [formData,setFormData]=useState({});
    const { loading, error } = useSelector((state) => state.user);

    const navigate=useNavigate();
    const dispatch=useDispatch();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch(signInStart());
        await axios.post("http://localhost:8800/api/auth/signin",{
            data: formData
        }).then((res)=>{
            if (res.status===200 || res.status===201) {
                dispatch(signInSuccess(res.data.user))
                navigate("/")
            }else{
                dispatch(signInFailure(res.data.message));
            }
        }).catch((err)=>{
            dispatch(signInFailure(err.response.data.message));
        })
    }
const handelChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    });
}
    return (
        <div className="p-3 bg-slate-200 max-w-lg mx-auto my-16 rounded-lg">
            <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
            <form  className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="email" 
                    placeholder='Email'
                    id='email'
                    className='border p-3 rounded-lg'
                    onChange={handelChange}
                />
                <input
                    type="password" 
                    placeholder='Password'
                    id='password'
                    className='border p-3 rounded-lg'
                    onChange={handelChange}
                />
                {loading?
                <Loading/>
                :
                <button 
                    disabled={loading}
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                    SignIn
                </button>
                }

            </form>
            <div className='flex gap-2 mt-5'>
                <p>Already Have an account?</p>
                <Link to={'/sign-up'}>
                    <span className='text-blue-700'>Sign up</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    )
}
