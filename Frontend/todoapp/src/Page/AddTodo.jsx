import React, { useState } from 'react'
import axios  from 'axios';
const AddTodo = () => {
    const [todo,setTodo]=useState([]);
    const [username,setUsername]= useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [email, setEmail]= useState("");
    const [address, setaddress]= useState("");
    const [profilePic,setprofilePic]= useState("");
    const addTodo=(paylaod) =>{
     
       return axios.post("http://localhost:8000/todo/create", paylaod)
        .then((r)=> {
            console.log(r);
            setTodo(r.data.todo)
      })
        .catch((e)=>{
            console.log(e);
        })
      }
       
      
     const handleAdd=()=>{
      if(todo){
        const payload={ username, mobileNo, email,address, profilePic};
        addTodo(payload);
        setTodo("")
      }
      
     }
  return (
    <div>
       
            <label >Username</label>
           <input type="text" placeholder='username' 
        value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <br />
        <label >mobileNo</label>
        <input type="text" placeholder='mobileNo'  maxLength="10"  value={mobileNo}
        onChange={(e)=>setMobileNo(e.target.value)}/>
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

        <button onClick={handleAdd}>Submit</button>
      
    </div>
  )
}

export default AddTodo