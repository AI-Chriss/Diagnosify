import UserForm from './components/UserForm';
import AiChat from './components/AiChat';
import FeelingsForm from './components/FeelingsForm';
import Intro from './components/Intro';
import introContent from './components/data/introContent'
import Header from './components/Header';
import './App.css';
import { useState } from 'react'

function App() {
  const [userFormData, setUserFormData] = useState([])
  const [currentFeelingsData, setcurrentFeelingsData] = useState([])
  const [pageId, setPageId] = useState(0)

  const getUserData = (data) => {
    setUserFormData(data)
  }

  const getFeelingsData = (data) => {
    setcurrentFeelingsData(data)
  }

  const nextPage = () => {
    setPageId(prevPageId => prevPageId + 1)
  }

  const app = [
    <Intro info={introContent.intro1.info} btnText={introContent.intro1.btnText} nextPage={nextPage} />,
    <Intro info={introContent.intro2.info} btnText={introContent.intro2.btnText} nextPage={nextPage} />,
    <UserForm getUserData={getUserData} nextPage={nextPage} />,
    <FeelingsForm getFeelingsData={getFeelingsData} nextPage={nextPage} />,
    <>
      <AiChat currentFeelingsData={currentFeelingsData} userFormData={userFormData}/>
      <button onClick={() => setPageId(3)}>Back</button>
    </>
  ];

  return (
    <>
      <Header />
      {app[pageId]}
    </>
  )
}

export default App
