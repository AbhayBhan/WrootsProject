import axios from "../axios";

export function getJobDetails(_data){
    return axios.get(`/roles/${_data}`);
} 