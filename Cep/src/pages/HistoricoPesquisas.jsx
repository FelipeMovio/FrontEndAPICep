import React, { useEffect, useState } from "react";
import axios from "axios";

function HistoricoPesquisas() {
  const [ceps, setCeps] = useState([]);

  useEffect(() => {
    // Função para buscar os dados
    const buscarCeps = () => {
      axios
        .get("http://localhost:8080/resultados/mais-pesquisados")
        .then((response) => {
          setCeps(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar os endereços:", error);
        });
    };

    // Buscar imediatamente ao montar
    buscarCeps();

    // Criar intervalo que busca a cada 5 segundos (5000 ms)
    const intervalo = setInterval(buscarCeps, 5000);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Historico de Pesquisas (Atualiza a cada 5s)</h2>
      <ul>
        {ceps.map((cep, index) => (
          <li key={index}>
            <strong>{cep.cep}</strong> - {cep.logradouro}, {cep.bairro},{" "}
            {cep.localidade} - {cep.uf}
            <br />
            <small>🔁 Pesquisado {cep.qtdPesquisas} vezes</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoricoPesquisas;
