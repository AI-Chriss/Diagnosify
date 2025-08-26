import React, { useState, useEffect } from "react";

function AiChat({ 
  userFormData: { name, diseases, diseaseType, description },
  currentFeelingsData: { employmentStatus, favColor }
}) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    { input: "", reply: `Cześć ${name || "użytkowniku"}! Jestem tutaj, aby pomóc Ci przeanalizować Twoje dane. Możesz zadać mi pytanie lub opisać, co chcesz wiedzieć.` }
  ]);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" + API_KEY;

  const systemPrompt = `
    Jesteś asystentem AI pomagającym analizować dane użytkownika.

    Dane od użytkownika:
    - Imię: ${name || "nie podano"}
    - Choroby: ${diseases || "nie podano"}
    - Typ choroby: ${diseaseType || "nie podano"}
    - Opis: ${description || "brak opisu"}
    - Status zatrudnienia: ${employmentStatus || "brak"}
    - Ulubiony kolor: ${favColor || "brak"}

    Zasady:
    - Odpowiadaj w pierwszej osobie (np. "Myślę, że...").
    - Pisz krótko i jasno.
    - Jeśli pytanie nie dotyczy powyższych danych, odpowiadaj ogólnie i neutralnie.
  `;

  const PLACEHOLDER_MESSAGES = [
    "Zadaj pytanie...",
    "Jak wpływa choroba na moje życie?",
    "Co mogę zrobić z tym opisem?",
    "Jakie są konsekwencje dla pracy?",
    "Czy mój kolor coś mówi o mnie?"
  ];

  const getRandomPlaceholder = () => {
    const randomIndex = Math.floor(Math.random() * PLACEHOLDER_MESSAGES.length);
    setPlaceholder(PLACEHOLDER_MESSAGES[randomIndex]);
  };

  useEffect(() => {
    getRandomPlaceholder();
    const intervalId = setInterval(() => getRandomPlaceholder(), 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt + "\n" + input }] }],
        }),
      });

      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Brak odpowiedzi";
      setOutput([...output, { input, reply }]);
      setInput("");
      getRandomPlaceholder();
    } catch (error) {
      console.error("Błąd podczas pobierania odpowiedzi:", error);
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-black text-white font-mono">
      <div>
        <div className="h-64 overflow-y-auto border border-gray-700 p-2">
          {output.map((item, index) => (
            <div key={index} className="mb-2">
              {item.input && <p className="text-green-400">{"> " + item.input}</p>}
              <p className="text-gray-300">{item.reply}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 bg-gray-900 text-white border border-gray-700"
            placeholder={placeholder}
          />
          <button type="submit" disabled={loading} className="ml-2">
            {loading ? "Czekaj..." : "Wyślij"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AiChat;