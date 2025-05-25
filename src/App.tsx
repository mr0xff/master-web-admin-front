import { Route, Routes } from "react-router";
import Login from "@/routes/Login";
import Home from "@/routes/Home";
import Settings from "@/routes/Settings";

export default function App(){
  
  return(
    <Routes>
      <Route index element={<Login />} />

      <Route path="cpanel">
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}