import UserForm from './components/UserForm';
import Display from './components/Display';
import './App.css';
import { useState } from 'react'


function App() {
  const [userFormData, setUserFormData] = useState([])

  const getUserData = (data) => {
    setUserFormData(data)
  }

  return (
    <>
      <UserForm getData={getUserData}/>
      <Display userData={userFormData}/>
    </>
  )
}

export default App
