import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function ListItems({listtodo,deleteHandler,toggleTodo,editTodo}) {

  const [editText, setEditText] = useState("");
    
  const handleEditChange = (e) => {

    // JO TEXT KO UPDATE KIA HAI USE save 
    setEditText(e.target.value); 
  };
  const handleEditSave = (index) => {

    // edit todo wala fn cAll kia props se 
    editTodo(index, editText); 


    setEditText(""); 
  };

    // console.log(listtodo)

  return (


    <div className='flex max-w-[600px] w-[400px] '>
        <div>
            
           <ul className='flex flex-col ml-[65px]  mt-6 '>
            
             {listtodo.map((item,index)=> (
                
            <div className='flex text-xl '> 
                <li key={index} className={` flex gap-x-5 ${item.isChecked ? "line-through" : ""}`}>
                     <div className='flex w-[320px] gap-x-2 '>
                        <input type="checkbox" 
                        className='mt-1'
                        checked={item.isChecked}
                        onChange={()=>toggleTodo(index)}
                        />
                         {item.isEditing ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={handleEditChange}
                      className="outline-none rounded-xl w-[250px] px-2 text-black-500 py-1 bg-white"
                    />
                  ) : (
                    <span className='font-semibold'>{item.text}</span>
                  )}

                    
                     </div>
                     <div className='flex gap-x-2  '>
                     {item.isEditing ? (
                    <button
                      onClick={() => handleEditSave(index)}
                      className='text-blue-500 flex text-xs'
                    >
                      Save
                    </button>
                  ) : (
                    <FaRegEdit
                      className='text-blue-500 cursor-pointer '
                      onClick={() => editTodo(index, item.text)}
                    />
                  )}
                        
                        <MdDelete
                    className='text-red-700  cursor-pointer'
                    onClick={() => deleteHandler(index)}
                  />
                     </div>
                </li>
            </div>
             ))}
           </ul>
        </div>
    </div>
  )
}

export default ListItems