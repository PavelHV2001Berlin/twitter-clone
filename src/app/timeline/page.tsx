"use client";
import React, {useState, useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { toast } from "react-hot-toast";
import Tweet from '@/app/components/Tweet';

const Home = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [allTweets, setAllTweets] = useState([]);
  useEffect(()=>{
    const loadTweets = async ()=>{
      const tweetsResponse = await axios.get("/api/tweets/load_tweets")
      setAllTweets(tweetsResponse.data.data)
      console.log("all tweets")
      console.log(allTweets)
    
    }
    try{
      loadTweets()
    }catch(error: any){
      console.log("Failed to load tweets",error.message);
      toast.error(error.message);
    }
  },[])
  const postTweet = async ()=>{
    try{
      const response = await axios.post("/api/tweets/create_tweet", {tweetContent: tweetContent})
      console.log("Tweet success", response.data);
    }
    catch(error:any){
      console.log("Tweet failed ",error.message);
      toast.error(error.message);
    }
    finally{
      setTweetContent("")
    }
  }
  return (
    <div className='twitter_timeline'>
       <div className='timeline_header'>
          <h3>HOME</h3>
          <ul className='timeline_header_navigation'>
            <li>For you</li>
            <li>Following</li>
          </ul>
        
        </div>
        <div className="create_tweet_container">
          <Image className='profile_image' src="/assets/images/testimage.jpg" height={50} width={50} alt='Profilbild'/>
          <div className='tweet_input_area'>
            <input placeholder='What is happening?' value={tweetContent} onChange={(e)=>{setTweetContent(e.target.value)}}/>
            <div className='input_actions_container'>
              <div>
                <svg fill='rgb(29, 155, 240)' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Zm160.118-390Q361-570 375.5-584.618q14.5-14.617 14.5-35.5Q390-641 375.382-655.5q-14.617-14.5-35.5-14.5Q319-670 304.5-655.382q-14.5 14.617-14.5 35.5Q290-599 304.618-584.5q14.617 14.5 35.5 14.5Z"/></svg>
                <svg fill='rgb(29, 155, 240)' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M330-400h61q12.325 0 20.663-9Q420-418 420-430v-40h-30v40h-60v-100h88q0-12-8.05-21T390-560h-60q-12.75 0-21.375 8.625T300-530v100q0 12.75 8.625 21.375T330-400Zm135 0h30v-160h-30v160Zm75 0h30v-60h70v-30h-70v-40h90v-30H540v160ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>
                <svg fill="rgb(29, 155, 240)" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M222-214 80-356l42-42 100 99 179-179 42 43-221 221Zm0-320L80-676l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z"/></svg>          
                <svg fill="rgb(29, 155, 240)" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393H278q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>
                <svg fill='rgb(29, 155, 240)' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M691-80q-78.435 0-133.718-55.283Q502-190.565 502-269q0-78.435 55.282-133.717Q612.565-458 691-458q78.435 0 133.718 55.283Q880-347.435 880-269q0 78.435-55.282 133.717Q769.435-80 691-80Zm58.243-88L777-196l-75-75v-112h-39v126l86.243 89ZM180-120q-24.75 0-42.375-17.625T120-180v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920q36 0 63.5 22.5T578-840h202q26 0 43 17t17 43v308q-15-9-29.516-15.48Q795.968-493.96 780-499v-281h-60v90H240v-90h-60v600h280q5 15 12 29.5t17 30.5H180Zm300-660q17 0 28.5-11.5T520-820q0-17-11.5-28.5T480-860q-17 0-28.5 11.5T440-820q0 17 11.5 28.5T480-780Z"/></svg>
                <svg fill='rgb(29, 155, 240)' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              </div>
              <button className='submit_tweet_btn' onClick={postTweet}>Post</button>
            </div>
          </div>
        </div>
        <div className='tweets_container'>
          {allTweets.map((tweet, index)=>(
            <Tweet
              key={index}
              username={tweet["userId"]["username"]}
              displayname={tweet["userId"]["displayname"]}
              numberOfLikes={tweet["numberOfLikes"]}
             >
            {tweet["tweetContent"]}
            </Tweet>
          )
          )}
         
        
          
        </div>
    </div>
   
  )
}

export default Home