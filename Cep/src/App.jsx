import React from "react";
import ConsumoAPi from "./services/ConsumoAPi";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Buscador de Cep</h1>
      <ConsumoAPi />
    </div>
  );
}

export default App;
