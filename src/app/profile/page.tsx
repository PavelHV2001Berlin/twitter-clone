"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function ProfilePage(){
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async ()=>{
        try{
            await axios.get("/api/users/logout")
            toast.success("Logout successful")
            router.push("/login")
        }catch(error: any){
            console.log(error.message);
            toast.error(error.message)
        }
    }
    const getUserDetails = async ()=>{
        const res = await axios.get("/api/users/me")
        console.log(res.data);
        setData(res.data.data._id)
    }
    return(
        <div className="profilepage_container">
            <h1>Profile</h1>
            <h2>{data === "nothing" ? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <p>Profile page</p>
            <button 
            onClick={logout}
            className="logout_button"
            >Logout</button>
                <button 
            onClick={getUserDetails}
            className="logout_button"
            >Get user Details</button>
        </div>
    )
}