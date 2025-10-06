import React, { useRef, useState } from "react";
import axios from "axios";
import RespostasApi from "../pages/respostasApi";

function ConsumoApi() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const [resposta, setRespostas] = useState(null);
  const [erro, setErro] = useState(null);

  async function buscarCep() {
    // Limpa erros anteriores
    setErro(null);
    setRespostas(null);

    // Pega valores e formata
    const uf = inputRef.current.value.trim();
    const cidade = encodeURIComponent(inputRef2.current.value.trim());
    const rua = encodeURIComponent(inputRef3.current.value.trim());

    // Validação básica
    if (!uf || !cidade || !rua) {
      setErro("Preencha todos os campos.");
      return;
    }

    // URL da API publica
    //const api = `http://viacep.com.br/ws/${uf}/${cidade}/${rua}/json`;

    // URL da API consumida localmente
    const api = `http://localhost:8080/consult-rua/${uf}/${cidade}/${rua}`;

    try {
      const apiInfo = await axios.get(api);
      setRespostas(apiInfo.data);
    } catch (err) {
      console.error("Erro na requisição:", err);
      setErro(
        "Erro ao buscar dados. Verifique se a API está online e os dados estão corretos."
      );
    }
  }

  return (
    <div>
      <h2>Encontre seu CEP</h2>

      <input ref={inputRef} type="text" placeholder="Digite seu UF" />
      <input ref={inputRef2} type="text" placeholder="Digite sua Cidade" />
      <input ref={inputRef3} type="text" placeholder="Digite sua Rua" />

      <button onClick={buscarCep}>Buscar</button>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <h2>Seu CEP é:</h2>
      {resposta && <RespostasApi resposta={resposta} />}
    </div>
  );
}

export default ConsumoApi;
