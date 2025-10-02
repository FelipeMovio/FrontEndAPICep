import React from "react";
import ConsumoAPi from "./services/ConsumoAPi";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Buscador de Cep</h1>
      <h2>Consumo de API</h2>
      <h3>Consumo de API com React</h3>
      <ConsumoAPi />
    </div>
  );
}

export default App;
