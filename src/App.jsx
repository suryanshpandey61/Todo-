import { useState } from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import ListItems from './components/ListItems'

import './App.css'

function App() {
  const[listtodo,setListTodo]=useState([]);

  

  const addlist=(inputValue)=>{


    // spread operator se previous state add hoga  ... 
    setListTodo([...listtodo,inputValue]);

  }

  // chekbox wala logic
  const toggleTodo = (index) => {
    const updatedTodos = listtodo.map((todo,i)=>{
      if(i===index){
        return{ ...todo, isChecked: !todo.isChecked};
      }
      return todo;
    })
    setListTodo(updatedTodos);
  
  }

  // edit function wala logic 

  const editTodo = (index, text) => {
    const updatedTodos = listtodo.map((todo, i) =>
      i === index ? { ...todo, text, isEditing: !todo.isEditing } : todo
    );
    setListTodo(updatedTodos);
  };



    const deleteHandler = (index) => {

    const newList = [...listtodo];
    newList.splice(index,1);
    setListTodo([...newList])

}



   
  // console.log(listtodo);
  


  return (
    <>
      <div className=' w-[100vw] h-[100vh] grad relative '>
      
        <div className='w-[40%] mx-auto flex h-auto flex-col  absolute maindiv'>
            {/* heading wala  */}
           <Header/>

           {/* input feild  */}
          <InputField addlist={addlist} />


          {/* add items wala  */}
          <ListItems
          listtodo={listtodo}
          deleteHandler={deleteHandler}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
          
        </div>


      </div>
    
    
    </>
  )
}

export default App
