import axios from "axios";

export function ReferSingle(_data){
    const headers = {
        'x-user-id': _data.userId,
      };
    return axios.post('https://ahypf5qicf.execute-api.us-east-1.amazonaws.com/Development/candidates',_data,{
        headers : headers
    })
};

export function ReferMultiple(_data){
    return axios.post('https://i12xdl0afj.execute-api.us-east-1.amazonaws.com/default/referMultipleCandidates', _data);
}
