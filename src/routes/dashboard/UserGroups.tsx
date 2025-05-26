import { getGroups } from "@/lib/api";
import Layout from "@/routes/dashboard/Layout";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function UserGroups(){
  const query = useQuery({ 
    queryKey: ["groups"], 
    queryFn: getGroups, 
  });
  
  useEffect(()=>{
    if(query.isError)
      toast.error(query.error.message);  
  }, []);
  return(
    <Layout title="Módulos do sistema">
      Modulos
      {JSON.stringify(query.data?.data)}
    </Layout>
  );
}
