import axios from 'axios';
import { BASE_URL } from './store.js';
import { REFRESH_TOKEN_KEY } from './common.js';
import {REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY} from "common.js";


async function accessTokenValid(){
try{
    const refreshToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const response = await axiosCall("api/token/verify/", {token:accessToken}, null, "POST")
    return true
} catch (e) {
    console.error("Invalid access token detected:", e)
    return false
}

}



async function refreshTokenLS(){
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
}


async function axiosCall(path, data = null, headersData = null, method = "GET") {
    try {
        const url = BASE_URL + path
        const headers = { 'Content-Type': 'application/json', ...headersData }
        const response = await axios({
            method,
            url,
            data,
            headers,
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(`Error in axiosCall`);
        console.error(error);
    }
}

export{
    accessTokenValid,
    refreshTokenLS,
    axiosCall
}