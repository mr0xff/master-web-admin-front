import { getGroups } from "@/lib/api";
import Layout from "@/routes/dashboard/Layout";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";

export default function UserGroups(){
  const query = useQuery({ 
    queryKey: ["groups"], 
    queryFn: getGroups(), 
  });
  
  useEffect(()=>{
    if(query.isError)
      toast.error(query.error.message);  
  }, []);
  return(
    <Layout title="Módulos do sistema">
      <div className="space-y-4">
        <Dialog />
        <div className="grid grid-cols-2 gap-x-3">
          <ul>
            {query.data?.data.map((props, index)=>(
              <div key={index} className="bg-white border px-3 py-4 rounded">
                <h2 className="text-lg font-medium">{props.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit, veritatis dolore quos sint delectus unde itaque ducimus accusantium expedita facere quaerat consequatur voluptates rerum, rem ipsum suscipit nihil ratione.</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
