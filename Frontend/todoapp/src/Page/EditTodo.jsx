import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditTodo = () => {
    const [username,setUsername]= useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [email, setEmail]= useState("");
    const [address, setaddress]= useState("");
    const [profilePic,setprofilePic]= useState("");
    const [todos,setTodos]= useState([])
    // const todos=useSelector((state)=> state.App.todos)
    const [title,setTitle]=useState("");
    const {id}= useParams()
    const navigate = useNavigate();
    const updateTodo=(id, payload) =>{
        console.log(payload)
       return axios.patch(`http://localhost:8000/todo/put/${id}`,payload )
        .then((r)=> {
          setTodos(r.data.todo)
        
        })
        .catch((e)=>{
            console.log(e);
        })
    
      }
       const handlecancel=()=>{
        setTitle("");
       }
      
     const handleAdd=()=>{
     
      if(title){
        const payload={ username, mobileNo, email,profilePic};
        console.log(payload, title)
        updateTodo(id,payload);
        // setTitle("");
        navigate("/")
      }
      
     }
  
  return (
    <div>
              <label >Username</label>
           <input type="text" placeholder='username' 
        value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <br />
        <label >mobileNo</label>address
        <input type="text" placeholder='mobileNo' maxLenaddressgth="10"  value={mobileNo}
      address  onChange={(e)=>setMobileNo(e.targeaddresst.value)}/>
        <br />
        <label >Email</label>
        <input type="email" placeholder='enter your mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <label >address</label>
        <input type="text" placeholder='enter your addresss' value={address} onChange={(e)=>setaddress(e.target.value)} />
        <br />
        <label >Profile Pic</label>
        <input type="url" placeholder='enter your mail' value={profilePic} onChange={(e)=>setprofilePic(e.target.value)} />
        <br />

        <button onClick={handleAdd}>update</button>
        <button onClick={handlecancel}>Cancel</button>
    </div>
  )
}

export default EditTodo