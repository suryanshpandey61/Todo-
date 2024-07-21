import React from "react";
import { LuListTodo } from "react-icons/lu";

const Header = () => {


    

return (

    <>
      <div className="flex mx-auto mt-2 ">
        <h1 className="font-bold text-xl text-blue-500">To-do App</h1>
       <span className="text-2xl left-2 relative top-1 text-blue-800 font-bold"><LuListTodo/></span>
      
      </div>
        
        
      
    </>
)


}

export default Header