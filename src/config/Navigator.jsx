import { Routes,Route } from "react-router-dom";
import {Login,Signup,Blog}from "../pages"

const Navigator = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/blog" element={<Blog/>}/>
             </Routes>
  )
}

export default Navigator