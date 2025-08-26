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
        <h1>How are you feeling?</h1>
        <form action={handleSubmit}>
          
          <fieldset>
            <legend>Do you have a fever?</legend>
            <label>
              <input type="radio" name="feverStatus" value="Yes" />
              Yes
          </label>
            <label>
              <input type="radio" name="feverStatus" value="No" />
              No
          </label>
            <label>
              <input type="radio" name="feverStatus" defaultChecked={true} value="full-time" />
              I don't know
          </label>
          </fieldset>

          <label htmlFor="favColor">What is your favorite color?</label>
          <select id="favColor" name="favColor" defaultValue="" required>
            <option value="" disabled>-- Choose a color --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
          </select>

          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

export default FeelingsForm