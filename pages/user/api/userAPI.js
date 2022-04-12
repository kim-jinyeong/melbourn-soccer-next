import axios from "axios";  
const SERVER = `http://localhost:5000`
export const userSignin = signinRequest => axios.post(`${SERVER}/user/sign-in`,signinRequest)
export const userSignup = signupRequest => axios.post(`${SERVER}/user/sign-up`,signupRequest)