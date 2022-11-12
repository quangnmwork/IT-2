import { UserLogin } from "~/types";
import { axiosClient } from "../axiosClient";

export const login  =async (data:UserLogin) => {

    await axiosClient.post('/auth/login' , data) ; 
  
    
}