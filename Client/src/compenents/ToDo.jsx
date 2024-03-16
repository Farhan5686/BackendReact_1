import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { baseURL } from '../Utils/Constant';



const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {

   const deleteTodo = () =>{
    axios.delete(`${baseURL}/delete/${id}`)
    .then(res =>{
      console.log(res.data)
      setUpdateUI((prevState) => !prevState)
    })
   }

   const updateToDo = () => {
    setPopupContent({ text, id})
    setShowPopup(true)
   }

  return (
    <div className='toDo'>
    {text}
      <div className='icons'>
   <RiEdit2Fill className='icon' onClick={updateToDo}/>
   <MdDelete className='icon' onClick={deleteTodo} />
  
      </div>
    </div>
  )
}

export default ToDo
