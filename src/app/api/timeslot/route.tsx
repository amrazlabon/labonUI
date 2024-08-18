import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        const { searchParams } = new URL(request.url);
        console.log('request education=> check ');
        // const reqBody = await request.json();
        // console.log('body ===============>', reqBody);
        const date = searchParams.get('date'); // Get the 'id' query parameter
        const response = await axios.get(`http://43.205.139.219/timeslot?date=${date}`);
        console.log("tests data",response.data)
        const res = NextResponse.json(response.data);
        // console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}

export async function POST(request : NextRequest){
    try{
        
        console.log('request education=> check post');
        const reqBody = await request.json();
        console.log('body ===============>', reqBody);
        const response = await axios.post(`http://43.205.139.219/tests/letter/${reqBody.term}`);
        console.log("tests data",response.data)
        const res = NextResponse.json(response.data);
        // console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}
