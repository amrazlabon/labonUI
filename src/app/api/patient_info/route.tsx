import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request){
    try{
        // console.log('request education=> check ');
        const { searchParams } = new URL(request.url);
        const endpoint = searchParams.get('endpoint'); // Get the 'endpoint' query parameter
        const id = searchParams.get('id'); // Get the 'id' query parameter

        let response;
        let res;
        if(endpoint === 'user'){

            response = await axios.get(`http://43.205.139.219/patient_contact/${endpoint}/${id}`);
            console.log("tests data",response.data)
            res = NextResponse.json(response.data);
        }
        else if(endpoint === 'per'){

            response = await axios.get(`http://43.205.139.219/patient_contact/${endpoint}/${id}`);
            console.log("tests data",response.data)
            res = NextResponse.json(response.data);
        }
        // const reqBody = await request.json();
        // console.log('body ===============>', reqBody);
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
        const response = await axios.post(`http://43.205.139.219/patient_contact`,reqBody);
        console.log("tests data",response.data)
        const res = NextResponse.json(response.data);
        console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}
