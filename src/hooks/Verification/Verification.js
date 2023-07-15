import axios from "../axios";

export function RequestOTP(_data){
    return axios.post('/otp/request',_data);
}

export function VerifyOTP(_data){
    return axios.post('/otp/verify',_data);
}