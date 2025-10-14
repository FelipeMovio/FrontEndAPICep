import React, { useRef, useState } from "react";
import axios from "axios";
import RespostasApi from "../pages/respostasApi";
import HistoricoPesquisas from "../pages/HistoricoPesquisas";

function ConsumoApi() {
  const inputUf = useRef();
  const inputCidade = useRef();
  const inputRua = useRef();
  const [resultado, setResultado] = useState([]);
  const [erro, setErro] = useState(null);

  const buscarDados = async () => {
    const uf = inputUf.current.value;
    const cidade = inputCidade.current.value;
    const rua = inputRua.current.value;

    if (!uf || !cidade || !rua) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    // URL da API publica
    //const api = `http://viacep.com.br/ws/${uf}/${cidade}/${rua}/json`;

    // URL da API consumida localmente
    const api = `http://localhost:8080/consult-rua/${uf}/${cidade}/${rua}`;

    try {
      const apiInfo = await axios.get(api);
      setResultado(apiInfo.data);
      setErro(null);

      // ✅ Limpa os inputs
      inputUf.current.value = "";
      inputCidade.current.value = "";
      inputRua.current.value = "";
    } catch (err) {
      console.error("Erro na requisição:", err);
      setErro(
        "Erro ao buscar dados. Verifique se a API está online e os dados estão corretos."
      );
      setResultado(null);
    }
  };

  return (
    <div className="main-content">
      <div className="left-content">
        <div className="inputs">
          <div className="logo">
            <h2>Encontre seu CEP</h2>
          </div>

          <input ref={inputUf} type="text" placeholder="UF (ex: SP)" />
          <input ref={inputCidade} type="text" placeholder="Cidade" />
          <input ref={inputRua} type="text" placeholder="Rua" />

          <button onClick={buscarDados}>Buscar</button>
        </div>

        {erro && <p className="error">{erro}</p>}

        <div className="resultado">
          <div className="logo">
            <h2>Informações do CEP pesquisado :</h2>
          </div>
          {resultado && <RespostasApi resultado={resultado} />}
        </div>
      </div>

      <div className="right-content">
        <HistoricoPesquisas />
      </div>
    </div>
  );
}

export default ConsumoApi;
