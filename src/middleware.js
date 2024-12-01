// middleware.js (or create in the 'middleware' folder)

import { NextResponse } from 'next/server';
import { ACCESS_TOKEN } from './constants';
import {REFRESH_TOKEN} from './constants'

export function middleware(request) {
  console.log("middleware running...");
    
  const token = request.cookies.get(ACCESS_TOKEN); // use string keys

  console.log("token",token, request);
  
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/upload'],
};
