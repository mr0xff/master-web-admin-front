import { getGroups, createGroup } from "@/lib/api";
import Layout from "@/routes/dashboard/Layout";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import Error from "@/components/Error";
import Input from "@/components/Input";

export default function UserGroups(){
  const { data, isError } = useQuery({ 
    queryKey: ["groups"], 
    queryFn: getGroups, 
  });
  
  const mutation = useMutation({ mutationFn: createGroup });
  const action = (ev: FormData) => {
    
    const name = ev.get("name") as string;
    mutation.mutate({ name }, {
      onSuccess: (ev)=> {
        toast.success(ev.data.message);
      },
      onError: ev => console.log(ev.message)
    })
  }

  if(isError)
    return <Error />;

  return(
    <Layout title="Módulos do sistema">
      <div className="space-y-4">
        <Dialog
          title="Castrar Novo Modulo"
          button="Novo" 
          center
          action={action}
        >
          <div className="w-full flex flex-col">
            <Input
              label="Módulo" 
              placeholder="Nome do Modulo" 
              className="w-full"
              name="name"
            />
            
            <Input
              label="Descrição" 
              placeholder="Descrição" 
              className="w-full"
              name="description"
            />
          </div>
        </Dialog>

        <div className="grid grid-cols-2 gap-x-3">
          <ul>
            {data?.map((props, index)=>(
              <div key={index} className="bg-white border px-3 py-4 rounded">
                <h2 className="text-lg font-medium">{props.name}</h2>
                <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sit, veritatis dolore quos sint delectus unde itaque ducimus accusantium expedita facere quaerat consequatur voluptates rerum, rem ipsum suscipit nihil ratione.</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
