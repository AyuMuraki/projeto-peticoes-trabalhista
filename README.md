# **👩🏻‍⚖️ ⚖️ Descomplicando o Mundo das Petições Trabalhistas com Objetos no Node.js**

## **🎯 Objetivo do Projeto**
Este projeto tem como objetivo demonstrar o uso da Programação Orientada a Objetos (POO) no Node.js como uma ferramenta intuitiva para manipular informações de processos trabalhistas. Em vez de apenas lidar com dados de maneira desorganizada, o projeto ensina a criar "modelos" (as classes) e "representações" desses modelos (os objetos ou instâncias), proporcionando uma maneira mais lógica e prática de trabalhar com dados..

*✨ Antes de mostrarmos como implementamos isso na prática, vamos primeiro facilitar a compreensão dos conceitos de programação. Ao entender como esses conceitos funcionam de forma mais teórico, será mais fácil ver como aplicá-los no código real do projeto.*

**🎮 Entendendo Conceitos de Programação com Exemplos de Videogame: Aplicando no Projeto Real**

Para tornar a compreensão dos conceitos de programação mais simples, vamos usar um exemplo fácil de entender: o mundo dos videogames! 🎮 A ideia é começar com o básico, explicando termos como classes, objetos e construtores de forma bem acessível. Ao usar algo familiar, como um jogo, fica mais fácil visualizar como esses conceitos funcionam na prática.

Depois de entendermos o básico, vamos conectar o que aprendemos ao projeto real. Vamos ver como os conceitos que explicamos, como a criação de objetos e a utilização de classes, são aplicados diretamente no código do nosso projeto, criando uma ponte entre a teoria e a prática. 💻

| **Conceito**                              | **Descrição**                                                                                                                                              |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Classe: O Personagem do Jogo 🧑‍🎮**     | A classe `Personagem` é como a ficha do personagem em um jogo. Ela define as características básicas do personagem, como nome, vida, pontos de força e defesa, além das ações que o personagem pode fazer, como atacar ou curar. |
| **Construtor: Preparando o Personagem 🔧** | O construtor é como a criação do personagem. Ele é o momento em que as informações são definidas, como nome e atributos iniciais (vida, força, etc.). Ao criar um novo personagem, essas informações são atribuídas automaticamente. |
| **Objeto (ou Instância): O Personagem no Jogo 🎮** | Cada vez que criamos um personagem, como "Alex" com 100 de vida e 30 de força, estamos criando uma instância (ou um personagem específico) a partir da classe `Personagem`. Cada personagem pode ter valores únicos de vida, força, etc. |
| **Métodos de Instância: O Que o Personagem Pode Fazer ⚔️** | Os métodos de instância são as ações que o personagem pode realizar no jogo. Por exemplo, `atacar()` é um método que reduz a vida do inimigo ao ser chamado, ou `curar()` que aumenta a vida do personagem. |
| **Array.map() + new: Criando Vários Personagens 🧑‍🤝‍🧑** | Quando temos uma lista de personagens (como de um arquivo), usamos o `.map()` para criar um personagem para cada conjunto de dados. Assim, podemos criar múltiplos personagens com diferentes atributos de uma vez. |
| **Responsabilidade Única: Cada Personagem Cuida de Si 🛡️** | Cada personagem é responsável apenas pelos seus próprios dados e ações no jogo. Isso mantém o código organizado e facilita a manutenção. |



**Exemplos de Métodos**

 **1️⃣ Método atacar():**
 Este método permite que o personagem ataque outro personagem. Ele pode reduzir a vida do inimigo com base no valor de força do personagem.


``` 
atacar(inimigo) {
  inimigo.vida -= this.forca;  // A vida do inimigo é reduzida pela força do atacante
}
```


**2️⃣ Método curar():**

 Este método aumenta a vida do personagem. Pode ser usado para recuperar pontos de vida durante o jogo.


```

curar() {
  this.vida += 20;  // A vida do personagem aumenta em 20
}
```

**3️⃣ Método mostrarStatus():**
 Este método exibe as informações do personagem, como nome, vida e força.


```
 mostrarStatus() {
  console.log(`Nome: ${this.nome}, Vida: ${this.vida}, Força: ${this.forca}`);
}
```




 # 📌 **Como os Conceitos Foram Aplicados no Projeto** 

Agora que você já compreendeu os conceitos de classe, objetos e métodos de maneira simples e sem a necessidade de conhecimentos técnicos avançados, vamos conectar isso com o que foi feito no projeto. Usaremos a mesma base teórica do exemplo do videogame, mas agora aplicaremos esses conceitos na prática, adaptando-os para o projeto real. Alguns termos serão ajustados, mas você logo se familiarizará com o processo à medida que avançamos.





| **Conceito**                     | **Como Foi Utilizado no Projeto**                                                                                                                                                          |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Classe: A Planta do Processo**  | A classe `PeticaoTrabalhista` foi usada como a "planta" para os processos trabalhistas. Ela define as características básicas de cada processo, como o número, o reclamante e o valor da causa. Também define os comportamentos, como verificar se o valor da causa é acima de R$10.000 e exibir um resumo. |
| **Construtor: Criando o Processo**| O construtor da classe `PeticaoTrabalhista` é como o "pedreiro" que usa a planta para construir um processo. Ele é chamado automaticamente para criar um novo objeto de processo com dados como número, reclamante e valor da causa. |
| **Objeto (ou Instância): O Processo Pronto** | Cada vez que chamamos o construtor, criamos um objeto ou instância da classe `PeticaoTrabalhista`, representando um processo com dados próprios que podem ser manipulados e exibidos. |
| **Métodos: O Que Podemos Fazer com o Processo** | Os métodos de instância são ações que podemos realizar com os processos, como: <br> - `estaAcimaDoValor(valorMinimo)`: Verifica se o valor da causa é superior a um valor mínimo (ex: R$10.000). <br> - `exibirResumo()`: Exibe um resumo formatado com o número, reclamante e valor da causa do processo. |
| **Método `.map()` e Criação de Objetos** | Usamos o método `.map()` para transformar os dados do arquivo JSON em objetos da classe `PeticaoTrabalhista`. Isso cria uma "lista de casas" (objetos de processos) com base nas informações do arquivo. |
| **Filtragem dos Processos**        | Após a criação dos objetos, usamos o método `.filter()` para selecionar apenas os processos cujo valor da causa é superior a R$10.000. |
| **Exibindo os Processos**          | Usamos o método `.forEach()` para percorrer os processos filtrados e exibir um resumo de cada processo, com o número do processo, o reclamante e o valor da causa. |



## **Como foi utilizado no projeto?**


*No código do projeto, aplicamos os conceitos de classe, construtor, objeto e métodos da seguinte forma:*

 **1️⃣ A classe PeticaoTrabalhista:**

 foi usada como a "planta" para os processos trabalhistas. Ela define o que cada processo vai ter, como:

O número do processo

O reclamante

O valor da causa

Ela também define o que pode ser feito com o processo, ou seja, os comportamentos (ou métodos) que podemos realizar, como verificar se o valor da causa é acima de R$10.000 e exibir um resumo do processo


**2️⃣ Construtor: Criando o Processo.**


O construtor da classe PeticaoTrabalhista é como o "pedreiro" que usa a planta para construir um processo. Ele é chamado automaticamente quando criamos um novo objeto (ou instância) de um processo, como no código:


```
new PeticaoTrabalhista(peticao.numero, peticao.reclamante, peticao.valorCausa)
```

Aqui, para cada processo, o construtor recebe os dados (número, reclamante, valor da causa) e cria um objeto de processo.


**3️⃣ Objeto (ou Instância): O Processo Pronto.**


Cada vez que usamos o construtor para criar um novo processo, estamos criando um objeto ou instância da classe PeticaoTrabalhista. Esses objetos são como os "processos prontos" que podem ser manipulados e exibidos.


**4️⃣ Métodos: O Que Podemos Fazer com o Processo.**
Os métodos de instância na classe PeticaoTrabalhista são as ações que podemos fazer com os processos. Por exemplo:

*  estaAcimaDoValor(valorMinimo): Verifica se o valor da causa é maior que um valor mínimo, como R$10.000.

```
peticao.estaAcimaDoValor(10000)
```

* exibirResumo(): Exibe um resumo formatado do processo, mostrando o número do processo, o reclamante e o valor da causa.

```
peticao.exibirResumo()
```

**5️⃣ Método .map() e Criação de Objetos.**

No código, usamos o método .map() para pegar todos os processos do arquivo JSON e criar objetos PeticaoTrabalhista para cada um deles. Isso é como construir uma "lista de casas" (ou processos), onde cada casa é um objeto PeticaoTrabalhista:

```
const peticoesFiltradas = peticoes
  .map((peticao) => new PeticaoTrabalhista(peticao.numero, peticao.reclamante, peticao.valorCausa))
```

**6️⃣ Filtragem dos Processos.**

Depois de criar os objetos, usamos o método .filter() para selecionar apenas aqueles processos cujo valor da causa é acima de R$10.000:

```
.filter((peticao) => peticao.estaAcimaDoValor(10000))
```


**7️⃣ Exibindo os Processos.**

Por fim, usamos o forEach() para percorrer os processos filtrados e exibir o resumo de cada um:

```
peticoesFiltradas.forEach((peticao) => {
  console.log(peticao.exibirResumo());
});
```



**Agora que você entendeu como esses conceitos foram usados no projeto, pode ver como o código segue a estrutura do exemplo de videogame. Cada parte do código tem sua função específica, como no jogo, com a classe definindo o "personagem", o construtor criando novas instâncias e os métodos realizando ações específicas.**







## **👩🏻‍💻 Ferramentas e Tecnologias Utilizadas**

| **Tecnologia/Conceito**       | **Como funciona**                                          | **Como foi aplicada no projeto**                                                            |
|-------------------------------|------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Node.js**                   | Ambiente de execução JavaScript no lado servidor           | Usado para executar o código que lê, organiza e filtra os processos.                        |
| **JSON**                       | Formato de dados simples e fácil de ler/escrever          | Usado para armazenar as informações dos processos trabalhistas.                             |
| **Método .map() (JS)**         | Cria um novo array transformando cada item                 | Utilizado para pegar cada processo do arquivo JSON e criar um objeto `PeticaoTrabalhista` correspondente. |
| **Método .filter() (JS)**      | Cria um novo array com itens que passam no teste          | Filtrou a lista de processos (agora objetos) para encontrar apenas aqueles com valor de causa acima de R$10.000. |
| **Método .forEach() (JS)**     | Executa uma ação para cada item de um array                | Usado para pegar os processos filtrados e exibir um resumo de cada um no console.            |
| **try...catch (JS)**           | Lida com erros durante a execução                          | Usado para lidar com erros ao ler o arquivo ou processar os dados.                          |
| **`require('./PeticaoTrabalhista')` (Node.js)** | Importa módulos no Node.js para reutilização de código | Usado para importar a classe `PeticaoTrabalhista`, definindo como cada processo será estruturado e manipulado. |
| **Arquivo JSON de Petições**   | Armazena dados em formato de texto legível e estruturado  | Usado para armazenar e carregar os dados dos processos trabalhistas que são manipulados pelo código. |


## **🚀 Como Executar**

**1️⃣ Pré-requisitos:**

- Node.js instalado na sua máquina.

* NPM (Node Package Manager) instalado (geralmente instalado com o Node.js).

**2️⃣ Clonar o repositório (opcional).**

```
git clone <URL_do_repositório>
cd <nome_do_repositório>
```

**3️⃣ Instalar dependências.**

```
npm init -y
```

**4️⃣ Executar o script.**

```
npm run dev
```

**⚡Resultado esperado.**

```
Processos com valor da causa acima de R$10.000:
Processo 0001345-22.2024.5.01.0020 de Maria Aparecida Santos no valor de R$ 15.200,50
Processo 0001567-45.2023.5.03.0007 de Carlos Henrique Oliveira no valor de R$ 22.000,00
Processo 0002123-77.2024.5.05.0012 de Fernanda Lima Costa no valor de R$ 18.000,00
Processo 0002345-99.2023.5.02.0044 de Luciana Pereira no valor de R$ 10.350,00
Processo 0002567-11.2024.5.03.0022 de Juliana Martins no valor de R$ 20.500,00
```

# **💡 O Que Foi Aprendido.** 


Este projeto mostrou como a POO pode tornar o código mais organizado e fácil de entender. Criar a classe PeticaoTrabalhista proporcionou uma estrutura clara para os dados dos processos, e o uso dos métodos .map() e .filter() tornou a manipulação desses dados mais eficiente.

Esses conceitos são esseciais para criar sistemas maiores e mais complexos, como um sistema completo de gerenciamento de processos jurídicos.

# **📚 O Que Foi Levado Dessa Jornada.**

A importância de organizar informações com classes para criar "modelos" no código.

Como os métodos dentro dessas classes permitem trabalhar com os dados de forma específica para cada "modelo".

A Programação Orientada a Objetos é uma maneira de resolver problemas de forma estruturada e assertiva.

Este projeto já servira como introdução para as próximos desafios.

# **🗣️ Quer Conversar?.**

Se ficou alguma dúvida ou se deseja trocar ideias sobre Node.js ou Programação Orientada a Objetos, fique à vontade para entrar em contato!

Feito com 💙 por Ayumi Muraki
