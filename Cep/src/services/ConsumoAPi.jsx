import React, { useRef, useState } from "react";
import axios from "axios";
import RespostasApi from "../pages/respostasApi";

function ConsumoAPi() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [resposta, setRespostas] = useState();

  async function buscarCep() {
    const uf = inputRef.current.value;
    const cidade = inputRef2.current.value;
    const rua = inputRef3.current.value;

    const api = `http://localhost:8080/consult-rua/${uf}/${cidade}/${rua}`;

    const apiInfo = await axios.get(api); // chamada da API

    setRespostas(apiInfo.data);
  }

  return (
    <div>
      <h2>Econtre seu Cep</h2>
      <input ref={inputRef} type="text" placeholder="Digite seu UF" />
      <input ref={inputRef2} type="text" placeholder="Digite sua Cidade" />
      <input ref={inputRef3} type="text" placeholder="Digite sua Rua" />

      <button onClick={buscarCep}>Buscar</button>

      <h2>Seu Cep é ...</h2>
      {resposta && <RespostasApi resposta={resposta} />}
    </div>
  );
}

export default ConsumoAPi;
