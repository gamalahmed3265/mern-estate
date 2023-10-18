import React, { useEffect } from 'react'
import axios from "axios";
export const Home = () => {

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response=  await axios.post("http://localhost:8800/api/user/add",
                {
                email:"sdfsdf"
            }
                );
                console.log("status "+response.status);
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData();
    },[])
    return (
        <div>home</div>
    )
}
