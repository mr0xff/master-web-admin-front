import Input from "@/components/Input";
import Button from "@/components/Button";
import { useMutation } from "@tanstack/react-query";
import { authLogin } from "@/lib/api";
import { toast } from "react-toastify";
import { serverHttpError } from "@/lib/api";
import { useNavigate } from "react-router";
import { Storage } from "@/lib/utils";

export default function Login(){
  const { mutate, status, isIdle } = useMutation({ mutationFn: authLogin });
  const navigate = useNavigate();

  const postAction = (form: FormData)=>{
    const user = form.get("user") as string;
    const pass = form.get("pass") as string;

    mutate({ pass, user }, {
      onSuccess: (ev)=>{
        toast.success(ev.data.message, { onClose: ()=>{
          navigate("/cpanel");
        }});
        Storage.setKey(ev.data.token);
      },
      onError: serverHttpError,
    });  
  }

  return(
    <main className="flex justify-center items-center h-screen">
      <form className="flex flex-col gap-3" action={postAction}>
        <Input 
          placeholder="nome de usuário" 
          label="username" 
          name="user"
        />

        <Input 
          placeholder="Senha" 
          label="password" 
          name="pass"
          type="password"
        />

        <Button>{status === "pending" ?"Processando...":"Entrar"}</Button>
      </form>
    </main>
  )
}