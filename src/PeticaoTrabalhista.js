class PeticaoTrabalhista {
  constructor(numero, reclamante, valorCausa) {
    this.numero = numero;
    this.reclamante = reclamante;
    this.valorCausa = valorCausa;
  }

  // Método para verificar se o valor da causa é superior ao valor mínimo fornecido
  estaAcimaDoValor(valorMinimo) {
    return this.valorCausa > valorMinimo;
  }

  // Método para exibir um resumo formatado do processo com o valor da causa formatado
  exibirResumo() {
    const valorFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.valorCausa);

    return `Processo ${this.numero} de ${this.reclamante} no valor de ${valorFormatado}`;
  }
}

// Exportando a classe para ser usada em outros arquivos
module.exports = { PeticaoTrabalhista };
