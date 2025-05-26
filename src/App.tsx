import React from 'react';
import { Route, Routes } from "react-router";
import Login from "@/routes/Login";
import Home from "@/routes/Home";

const UserGroups = React.lazy(()=>import("@/routes/dashboard/UserGroups"));
const Users = React.lazy(()=> import("@/routes/dashboard/Users"));
const RoleAccessControl = React.lazy(()=>import("@/routes/dashboard/RoleAccessControl"));

export default function App(){
  
  return(
    <Routes>
      <Route index element={<Login />} />

      <Route path="cpanel">
        <Route index element={<Home />} />
        <Route path="roles" element={<RoleAccessControl />} />
        <Route path="groups" element={<UserGroups />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  )
}