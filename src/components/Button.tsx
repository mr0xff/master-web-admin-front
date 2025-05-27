import { type PropsWithChildren } from "react";
import clsx from "clsx";

interface ButtonProps extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>{
  kind?: "cancel",
}

export default function Button(props: ButtonProps){
  return(
    <button 
      {...props} 
      className={clsx(
        "bg-primary text-white px-3 py-1 hover:bg-primary/90 rounded font-medium", 
        props.className,
        { "bg-red-600 hover:bg-red-700": props.kind === "cancel" }
      )}
    >
      {props.children}
    </button>
  )
}