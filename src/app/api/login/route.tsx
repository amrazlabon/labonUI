import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try{
        console.log('request education=> ');
        const reqBody = await request.json();
        console.log('body ===============>', reqBody);
        const response = await axios.post(`http://43.205.139.219/users`, reqBody);
        console.log("the post response",response.data)
        const res = NextResponse.json(response.data);
        // console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}

export async function PATCH(request: NextRequest){
    try{
        console.log('request education=> ');
        const reqBody = await request.json();
        const { id, ...data } = reqBody;

        console.log('Data to be sent ===============>', data);
        console.log('ID ===============>', id);

        // Make the PATCH request
        const response = await axios.patch(`http://43.205.139.219/users/${id}`, data);
        console.log(response.data);
        const res = NextResponse.json(response.data);
        // console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}

export async function GET(request: NextRequest) {
    try {
      const { searchParams } = new URL(request.url);
      const endpoint = searchParams.get('endpoint'); // Get the 'endpoint' query parameter
      const id = searchParams.get('id'); // Get the 'id' query parameter
      const otp = searchParams.get('otp'); // Get the 'otp' query parameter
      const mobile = searchParams.get('mobile');  // Get the 'mobile' query parameter
  
      console.log("the endpounts",mobile);
      
      let response;
      if (endpoint && id) {
        // Handle the first API call
        console.log('Fetching user data');
        response = await axios.get(`http://43.205.139.219/users/${endpoint}/${id}`);
      } else if (otp && mobile) {
        // Handle the OTP verification call with query parameters
        console.log('Verifying OTP');
        response = await axios.get(`http://43.205.139.219/users/verify_otp`
            , {
          params: { otp, mobile }
        }
    );
      } else {
        return NextResponse.json({ error: 'Invalid query parameters' });
      }
  
      // Await the API response properly before returning
      if (response && response.data) {
        console.log('Response Data: ', response.data);
        return NextResponse.json(response.data);
      } else {
        return NextResponse.json({ error: 'No data found in response' });
      }
    } catch (error: any) {
      console.error('Error => ', error.response);
      return NextResponse.json(error.response?.data?.errors || { error: 'Request failed' });
    }
  }
  
