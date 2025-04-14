function Display({userData}) {

  return (
    <>
      <h1>User Data:</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </>
  )
}

export default Display