import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
              <div className="container" style={{ display:'flex', width:"100%", height:"50px", justifyContent:"space-between", backgroundColor:"teal", color:"white",fontSize:"24px"}}>
                <div className="left" style={{ width:"40%", fontSize:"24px",color:"white", alignItems:"center"}}>
                    <Link to="/">
                    todoApp
                    </Link> 
                </div>
                <div className="right"style={{ width:"60%", fontSize:"24px",color:"white", alignItems:"center"}}>
                      <Link to="/add">
                        AddTodo
                      </Link>
                </div>
              </div>
        </div>
    )
}
