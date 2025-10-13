import React, { useEffect, useState } from "react";
import axios from "axios";

function CepsMaisPesquisados() {
  const [ceps, setCeps] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/resultados/mais-pesquisados")
      .then((response) => {
        setCeps(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os endereços:", error);
      });
  }, []);

  return (
    <div>
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

export default CepsMaisPesquisados;
