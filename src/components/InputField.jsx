import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputField = ({addlist}) => {


    const [inputValue,setInputValue] = useState("");
    


   const submitHandler = (e) => {
     e.preventDefault();

    //  condn lgaye ki agr empty ho to kuch list me add nhi ho 
    // trim isliye use hua jo space ayege data me use neglect kr dega taki vo kam storage acquire kre 

    if (inputValue.trim() !== "") { 
      addlist({
        text: inputValue,
        isChecked: false,
        isEditing: false 
      });
    } else {
      toast.warn("Add an item");
    }

     setInputValue("");
   }
    

    return (
        <>
        
        <div className="flex relative mx-auto mt-4 ">
            {/* input field aur add btn dono yha  */}
        <form  onSubmit={submitHandler}>
          <input
             type="text"
             value={inputValue}
             placeholder="Add an  Items"
             onChange={(e)=>setInputValue(e.target.value)}


             className="  outline-none

              rounded-xl w-[400px] px-2 text-black-500 py-2 bg-pink-200"
            />
            <button
            
            className="rounded-xl px-5 py-2 hover:bg-green-500 transition-all duration-400 absolute right-0 bg-orange-400 font-bold text-white " 
            type="submit"

            >Add</button>
        </form>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
           
        </div>
        
        </>
    )
}

export default InputField