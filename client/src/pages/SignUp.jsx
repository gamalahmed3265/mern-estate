import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Loading } from '../Compontens/Loading';
import OAuth from '../Compontens/OAuth';
export const SignUp = () => {
    const [formData,setFormData]=useState({});
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        await axios.post("http://localhost:8800/api/auth/signup",{
            data: formData
        }).then((res)=>{
            if (res.status===200 || res.status===201) {
                setLoading(false)
                setError(null);
                navigate("/sign-in")
            }else{
                setLoading(true)
                setError(res.data.message);
            }
        }).catch((err)=>{
            console.log(err.response.data.message);
            setLoading(false)
            setError(err.response.data.message);
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
            <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
            <form  className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="email" 
                    placeholder='Email'
                    id='email'
                    className='border p-3 rounded-lg'
                    onChange={handelChange}
                />
                <input
                    type="text" 
                    placeholder='Username'
                    id='username'
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
                    SignUp
                </button>
                }
            <OAuth/>
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Have an account?</p>
                <Link to={'/sign-in'}>
                    <span className='text-blue-700'>Sign in</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    )
}
