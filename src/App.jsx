import { useEffect, useState } from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import ListItems from './components/ListItems'

import './App.css'

// globally items chaiye from local storage

const getItemFromLocalStorage = () => {

  // get items fn se value local storage se ate hai 
  let list = localStorage.getItem('lists');

  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }
  else{
    return []
  }



}

function App() {

  // hamara sara data listtodo me save ho rh hai 

  const[listtodo,setListTodo]=useState(getItemFromLocalStorage());

  

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

  // set or save the data into the local storage by using set method
  useEffect (()=> {
    localStorage.setItem('lists',JSON.stringify(listtodo))
  },[listtodo]);
  


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
