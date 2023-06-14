import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
const Todo = () => {
    const [data,setData] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate()
    const getTodo=async()=>{
      return axios.get("http://localhost:8000/todo/all")
      .then((r)=>{
        console.log(r.data);
        setData(r.data.todo)
      }) 
      .catch((e)=>{
        console.log(e);
      })
      
    }
    useEffect(()=>{
        getTodo()
    },[])
    const removeTodo=(id)=>{
        axios.delete(`http://localhost:8000/todo/delete/${id}`)
        .then((r) =>{
           setData(id)
           navigate("/")
        })
        .catch((e)=>{
            console.log(e);
        })
      }

   
    console.log(data);
  return (
    <div>
        <h1>Todo App</h1>
         
        <div>
        { data.length > 0 &&  data.map((item, index)=>{
            return <div>
                <div>{item.username}</div>
                <div>{item.email}</div>
                <div>{item.mobileNo}</div>
                <div>
                   <img src={item.profilePic} alt="" />  
                    </div>
                <Link to={`/edit/${index+1}`}>
                <button>Edit</button>
                </Link>
                <br />
                <button onClick={()=> removeTodo(index+1)}>Delete</button>
                </div>
        })}
        </div>
        
    </div>
  )
}

export default Todo