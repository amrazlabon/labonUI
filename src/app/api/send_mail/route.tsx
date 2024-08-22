import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Mailjet from 'node-mailjet';

export async function GET(){
    try{
        console.log('request education=> check ');
        // const reqBody = await request.json();
        // console.log('body ===============>', reqBody);
        const response = await axios.get(`http://43.205.139.219/addresses/user/1`);
        console.log("tests data",response.data)
        const res = NextResponse.json(response.data);
        // console.log('back success ===> ', res);
        return res;

    } catch(error: any){
        // console.log('errors => ', error.response);
        
        return NextResponse.json(error.response.data.errors)
    }
    
}

interface EmailRequestBody {
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const reqBody: EmailRequestBody = await request.json();
    console.log("Request Body:", reqBody);

    const { email, subject, message } = reqBody;

    if (!email || !subject || !message) {
      console.error('Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log("Sending email via Mailjet...");

    const mailjet = Mailjet.apiConnect(
      'd73f035ddff496ebbd72e9e337a25e8e', // or use process.env.MAILJET_API_KEY
      'a9145458bb46276d7e862764b99d3712'  // or use process.env.MAILJET_SECRET_KEY
    );

    const response = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'mohd.amraz0@gmail.com',
              Name: 'Labon Test',
            },
            To: [
              {
                Email: email,
                Name: 'Test',
              },
            ],
            Subject: subject,
            // TextPart: message,
            HTMLPart: message,
          },
        ],
      });

    console.log("Mailjet Response:", response.body);

    return NextResponse.json({ message: 'Email sent successfully', data: response.body });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'Error sending email', details: err }, { status: 500 });
  }
}



  
