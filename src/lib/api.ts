import axios from 'axios';
import { Storage } from '@/lib/utils';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: "http://192.168.1.178:8080/v1/"
});

export interface ServerResponse {
  message: string;
  token: string;
  status: boolean;
}

export interface ErrorServerResponse extends Error {
  response: {
    data: {
      statusCode: number;
      code: string;
      error: string;
      message: string;
    }
  }
};

export function serverHttpError(e: unknown){
  const err = e as ErrorServerResponse;
  return toast.error(err.response.data.message);
}

async function authLogin({ user, pass }:{ user: string; pass: string }){
  return instance.post<ServerResponse>('/auth/login', { username: user, password: pass });  
}

async function middlewareAuthedUser(){
  const secretKey = localStorage.get('secret_key');

  if(!secretKey)
    throw new Error("Not found secret key");

  return axios.get('/user/profile', {
    headers: {
      "x-auth": secretKey
    }
  });
}

function clientTokenHandler(){
  const token = Storage.getKey();
  if(!token)
    throw new Error("token not found");

  return { headers: { "x-auth": token }};
}

async function logOut(){
  return new Promise((resolve)=>resolve(true)) // fake promise
  const key = Storage.getKey();
  return axios.delete('/auth/login', { headers: { "x-auth": key }});
}

async function getGroups(){
  return instance.get('/user/group', clientTokenHandler())
} 

export {
  instance,
  authLogin,
  middlewareAuthedUser,
  logOut,
  getGroups,
  clientTokenHandler
}