import clsx from "clsx";

interface InputProsp extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string;
};

export default function Input(props:InputProsp){
  return(
    <label>
      <p className="text-sm font-medium mb-2">{props.label}</p>
      <input {...props} className={clsx("border px-3 py-2 rounded", props.className)} />
    </label>
  );
}