import styles from './styles/UserForm.module.css';

function FeelingsForm({getFeelingsData, nextPage}) {
  
  function handleSubmit(formData) {
    const data = Object.fromEntries(formData)
    getFeelingsData(data)
    nextPage()
  }

  return (
    <>
      <section style={styles}>
        <h1>About you</h1>
        <form action={handleSubmit}>
          
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

export default FeelingsForm