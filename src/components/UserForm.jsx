import styles from './styles/UserForm.module.css';
import { useState } from 'react';

function UserForm({getUserData, nextPage}) {
  const [diseaseState, setDiseaseState] = useState();

  function handleSubmit(formData) {
    const data = Object.fromEntries(formData)
    getUserData(data)
    nextPage()
  }

  function changeDiseaseState(event) {
    setDiseaseState(event.target.value)
  }

  return (
    <>
      <section style={styles}>
        <h1>About you</h1>
        <form action={handleSubmit}>
          
          <label htmlFor="name">Your name:</label>
          <input id="name" defaultValue="Chriss" type="text" name="name" placeholder="Adam" />

          <fieldset onChange={changeDiseaseState}>
            <legend>Do you have chronic diseases?</legend>
            
            <label>
              <input type="radio" name="diseases" value="yes" />
                Yes
            </label>
            
            <label>
              <input type="radio" name="diseases" value="no" />
              No
            </label>
          </fieldset>

          {diseaseState === "yes" ? 
            <>
              <label htmlFor="disease">Type your diseases:</label>
              <input id="disease" type="text" name="diseaseType" placeholder="Diabeties" />
            </>
          : null 
          }
          
          <label htmlFor="description">If you want say something about you:</label>
          <textarea id="description" name="description" defaultValue="This is a description"></textarea>

          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

export default UserForm