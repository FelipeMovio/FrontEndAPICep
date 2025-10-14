import React, { useEffect, useState } from "react";
import ConsumoAPi from "./services/ConsumoAPi";
import "./App.css";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  // Carregar tema salvo
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema") === "dark";
    setTemaEscuro(temaSalvo);
  }, []);

  // Salvar tema no localStorage
  useEffect(() => {
    localStorage.setItem("tema", temaEscuro ? "dark" : "light");
  }, [temaEscuro]);

  return (
    <div className={`container ${temaEscuro ? "dark" : "light"}`}>
      <div className="tema-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={temaEscuro}
            onChange={() => setTemaEscuro(!temaEscuro)}
          />
          <span className="slider round"></span>
        </label>
        <span>{temaEscuro ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
      </div>

      <h1>Buscador de CEP</h1>
      <ConsumoAPi />
    </div>
  );
}

export default App;
