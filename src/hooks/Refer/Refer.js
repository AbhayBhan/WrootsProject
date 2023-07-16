import axios from "../axios";

export function ReferSingle(_data){
    const headers = {
        'x-user-id': _data.userId,
      };
    return axios.post('/candidates',_data,{
        headers : headers
    })
};