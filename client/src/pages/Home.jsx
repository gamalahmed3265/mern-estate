import React, { useEffect } from 'react'
import axios from "axios";
export const Home = () => {

    const fetchOfferListings=async(e)=>{
        await axios.post("http://localhost:8800/api/auth/google",{
            
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            <h1>home</h1>
            <button onClick={fetchOfferListings}>fetchOfferListings</button>

        </div>
    )
}
