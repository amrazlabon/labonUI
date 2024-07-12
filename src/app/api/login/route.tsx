import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try{
        console.log('request education=> ');
        const reqBody = await request.json();
        console.log('body ===============>', reqBody);
        const response = await axios.post(`http://0.0.0.0:37000/users/email`, reqBody);
        console.log(response.data)
        const res = NextResponse.json(response.data);
        // console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}
