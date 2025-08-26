function Intro({info, btnText, nextPage}) {

  return (
    <>
      <p>{info}</p>
      <button onClick={nextPage}>{btnText}</button>
    </>
  )
}

export default Intro