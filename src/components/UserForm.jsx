import styles from './styles/UserForm.module.css';
import { useState } from 'react'

function UserForm({getData}) {
  const [userData, setUserData] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    setUserData(data)
    getData(data)
  }

  return (
    <>
      <section style={styles}>
        <h1>Signup form</h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email:</label>
          <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

          <label htmlFor="password">Password:</label>
          <input id="password" defaultValue="password123" type="password" name="password" />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" defaultValue="This is a description"></textarea>

          <fieldset>
            <legend>Employment Status:</legend>
            <label>
              <input type="radio" name="employmentStatus" value="unemployed" />
              Unemployed
          </label>
            <label>
              <input type="radio" name="employmentStatus" value="part-time" />
              Part-time
          </label>
            <label>
              <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
              Full-time
          </label>
          </fieldset>

          <label htmlFor="favColor">What is your favorite color?</label>
          <select id="favColor" name="favColor" defaultValue="" required>
            <option value="" disabled>-- Choose a color --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>

          <button>Submit</button>

        </form>
      </section>
    </>
  )
}

export default UserForm