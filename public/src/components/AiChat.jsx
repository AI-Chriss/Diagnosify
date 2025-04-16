function AiChat({ 
  userFormData: { name, diseases, diseaseType, description },
  currentFeelingsData: { employmentStatus, favColor }
}) {

  return (
    <>
      {console.log(name, diseases, diseaseType, description, employmentStatus, favColor)}
    </>
  )
}

export default AiChat