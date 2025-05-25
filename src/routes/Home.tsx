import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { logOut } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export default function Home(){
  const mutation = useMutation({ mutationFn: logOut });
  const navigate = useNavigate();
  
  const handler = ()=> mutation.mutate(undefined, {
    onSuccess: ()=>{
      navigate("/");
      toast.success("sesão terminada com sucesso!");
    },
    onError: () => toast.error("Não foi possivel concluir a operação!")
  });
  
  return(
    <main>
      <div>
        <NavLink to={"/settings"}>settings</NavLink>
        <Button onClick={handler}>log out</Button>
      </div>
    </main>
  )
}