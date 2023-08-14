import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Tweet from '@/models/tweetModel';
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const {tweetContent} = reqBody
        console.log(reqBody);
        const userId = getDataFromToken(request)
        const newTweet = new Tweet({
            userId,
            tweetContent
        })
        const savedTweet = await newTweet.save();
        console.log(savedTweet)
        return NextResponse.json({
            message: "Tweet created successfully",
            success: true,
            savedTweet
        })
    }catch(error: any){
        console.log(error.message)
        return NextResponse.json({error: error.message},{status: 500})
    }
}