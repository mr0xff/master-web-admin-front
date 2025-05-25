import { type PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>{
  kind?: "cancel"
}

export default function Button(props: ButtonProps){
  return(
    <button 
      {...props} 
      className={clsx("bg-blue-500 text-white px-3 py-2")}
    >
      {props.children}
    </button>
  )
}