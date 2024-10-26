import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ToDoList from './components/ToDoList'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Layout from './Layout/Layout'
import Home from './components/Home'
import SideNavbar from './components/SideNavbar'
import ResetPassword from './components/ResetPassword'

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<SignUp />} />
     <Route path='/ResetPassword' element = {<ResetPassword/>}/>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<SideNavbar/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/todolist' element = {<ToDoList/>}/>

      </Route>

    </Route>
  )
)


  return (
    <>
    
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App