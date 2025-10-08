import React from "react";

function RespostasApi({ resultado }) {
  console.log(resultado);
  return (
    <div>
      <div>
        <ul>
          {resultado.map((item, index) => (
            <li key={index}>
              <strong>CEP:</strong> {item.cep} <br />
              <strong>Logradouro:</strong> {item.logradouro} <br />
              <strong>Bairro:</strong> {item.bairro} <br />
              <strong>Localidade:</strong> {item.localidade} - {item.uf}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RespostasApi;
