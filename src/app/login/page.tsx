"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage(){
    const router = useRouter();
    
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
        displayname: ""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () =>{
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/timeline");
        }catch(error: any){
            console.log("Login failed", error.response.data);
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user])
    return (
        <div className='login_container'>
        <svg fill='#333' xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
        <div className='login_form'>
            <h2>{loading? "Processing": "Login"}</h2>
          
            <input type='email' placeholder='Enter your email'
             value={user.email}
             onChange={(e)=> setUser({...user, email:e.target.value})}
            
            />
            <input type='password' placeholder='Enter your password'
             value={user.password}
             onChange={(e)=> setUser({...user, password:e.target.value})}
            />
            <button disabled={buttonDisabled} onClick={onLogin}>Login here</button>
            <Link href="/signup">Visit Signup page</Link>
            </div>
            </div>
    )
}