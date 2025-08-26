import UserForm from "./UserForm";

function AiChat({ 
  userFormData: { name, diseases, diseaseType, description },
  currentFeelingsData: { employmentStatus, favColor }
}) {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + API_KEY;

  return (
    <>
      <p>{UserFormData.name}</p>
    </>
  )
}

export default AiChat