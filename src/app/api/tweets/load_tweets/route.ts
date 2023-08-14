import { NextRequest, NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import Tweet from "@/models/tweetModel";

connect();

export async function GET(request: NextRequest){
    try{
        const allTweets = await Tweet.find().populate({
            path: "userId",
            select: "_id username displayname"
    });

        return NextResponse.json({
            message: "Tweets found",
            data: allTweets
        })
    }catch(error: any){
        return NextResponse.json({error: error.message},
            {status: 400});
    }
}