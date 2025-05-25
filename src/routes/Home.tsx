import { NavLink } from "react-router";

export default function Home(){
   
  return(
    <main>
      <div>
        <NavLink to={"/settings"}>settings</NavLink>
      </div>
    </main>
  )
}