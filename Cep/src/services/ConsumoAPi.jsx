import React, { useRef } from "react";
import axios from "axios";

function ConsumoAPi() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  async function buscarCep() {
    const uf = inputRef.current.value;
    const cidade = inputRef2.current.value;
    const rua = inputRef3.current.value;

    const api = `http://localhost:8080/consult-rua/${uf}/${cidade}/${rua}`;

    const apiInfo = await axios.get(api); // chamada da API
  }

  return (
    <div>
      <h1>Consumo de API</h1>
    </div>
  );
}

export default ConsumoAPi;
