import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>

export default function Input({label, id, ...props}: InputProps){
  return (
    <section className="control">
      <label id={id}>{label}</label>
      <input id={id} {...props}/>
    </section>
  )
}