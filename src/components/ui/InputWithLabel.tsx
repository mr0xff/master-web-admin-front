import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.id}>{props.title}</Label>
      <Input {...props} type={type} />
    </div>
  )
}
