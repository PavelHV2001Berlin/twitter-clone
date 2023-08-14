"use client";
import Link from "next/link";
import React, { useEffect, useState} from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage(){
    const imageNames = ['coman.jpg', 'giga.jpg', 'kimmich.jpg', 'thomas.jpg'];

    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
        displayname: "",
        imageName: imageNames[Math.floor(Math.random()*imageNames.length)]
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);


    const onSignup = async (e:any) =>{
        e.preventDefault();
        try{
            setLoading(true);
            const response = await axios.post("/api/users/signup", user)
            console.log("Signup success", response.data);
            router.push("/login")
        }catch(error:any){
            console.log("Signup failed ",error.message);

            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0 && user.displayname.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }, [user])

    
    return(
        <div className='login_container'>
            <svg fill='#333' xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
            <form onSubmit={onSignup} className='login_form'>
                <h2>{loading?"Loading":"Konto erstellen"}</h2>
                <input type='text' placeholder='Enter your display name'
                value={user.displayname}
                onChange={(e)=> setUser({...user, displayname:e.target.value})}
                />
                <input type='text' placeholder='Enter your username (@)'
                   value={user.username}
                   onChange={(e)=> setUser({...user, username:e.target.value})}
                />
                <input type='email' placeholder='Enter your email'
                 value={user.email}
                 onChange={(e)=> setUser({...user, email:e.target.value})}
                />
                <input type='password' placeholder='Enter your password'
                 value={user.password}
                 onChange={(e)=> setUser({...user, password:e.target.value})}
                />
                <button disabled={buttonDisabled} onClick={onSignup}>{buttonDisabled?"No signup": "Signup"}</button>
                <Link href="/login">Visit login page</Link>
            </form>
        </div>
    )
}