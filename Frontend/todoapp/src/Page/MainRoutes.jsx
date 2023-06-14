import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from '../Component/Todo'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Todo/>}/>
            <Route path='/add' element={<AddTodo/>}/>
            <Route path='/edit/:id' element={<EditTodo/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes