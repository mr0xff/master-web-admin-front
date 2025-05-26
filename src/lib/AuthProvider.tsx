import { useNavigate } from "react-router";
import { clientTokenHandler } from "./api";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function AuthProvider(){
  const navigate = useNavigate();

  useEffect(()=>{
    try{
      const token = clientTokenHandler();
      console.log(token)
    }catch(e){
      navigate("/");
      toast.error("Falha na verificação");
    }
  });
  return <></>
}