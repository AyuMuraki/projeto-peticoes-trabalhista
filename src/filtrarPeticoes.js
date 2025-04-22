// Importando a classe PeticaoTrabalhista
const { PeticaoTrabalhista } = require("./PeticaoTrabalhista");
const fs = require("fs");

// Lendo o arquivo JSON com os dados dos processos
fs.readFile("peticoes.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  // Parse do JSON
  const peticoes = JSON.parse(data);

  // Criando instâncias de PeticaoTrabalhista e filtrando os processos com valor da causa acima de R$10.000
  const peticoesFiltradas = peticoes
    .map(
      (peticao) =>
        new PeticaoTrabalhista(
          peticao.numero,
          peticao.reclamante,
          peticao.valorCausa
        )
    )
    .filter((peticao) => peticao.estaAcimaDoValor(10000));

  // Exibindo o resumo dos processos filtrados
  console.log("Processos com valor da causa acima de R$10.000:");
  peticoesFiltradas.forEach((peticao) => {
    console.log(peticao.exibirResumo());
  });
});
