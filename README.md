![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Search d_evs | Teste Técnico

O projeto aqui encontrado se trata de um desafio técnico em React.js e foi desenvolvido com base em requisitos pré-estabelecidos pela empresa. As mudanças e adições de minha autoria estarão listadas mais adiante, assim como as explicações de cada escolha.
## Demo

![demo](https://github.com/zaqueu-1/search-devs/github/main/demo.gif)

## Instalação de dependências
Certifique-se de ter o Node instalado em sua máquina. Clone o repositório e, no diretório do projeto, execute um dos seguintes comandos pelo terminal, de acordo com o gerenciador de pacotes de sua preferência:
```bash
  npm install
```
```bash
  yarn install
```
    
## Rodando o Ambiente de Desenvolvimento
Para iniciar a aplicação em modo de desenvolvimento, utilize um dos comandos a seguir:
```bash
  npm run dev
```
```bash
  yarn dev
```
Em seguida, abra seu navegador e acesse o projeto em http://localhost:5173


## Rodando  a Build de Deploy
Para criar uma versão de produção otimizada da aplicação, execute um dos comandos a seguir através do terminal:
```bash
  npm run build
```
```bash
  yarn build
```

## Stack utilizada
Este projeto foi totalmente desenvolvido em React.js e foi criado por meio do Vite. O motivo dessa escolha em relação ao CRA parte da própria documentação da biblioteca, que recomenda o uso do Vite ou do create-next-app para aqueles que preferem utilizar o framework Next.js.

Além disso, foram utilizadas as seguintes libs:
* axios
* react-router-dom & history
* react-icons

**axios** facilita o uso de promises e requisições HTTP, além de ser mais interessante para manipular dados em JSON do que o fetch().

**react-router-dom** e **history** permitem a criação de rotas de maneira prática, além de possibilitarem que as URLs das rotas possam ser compartilhadas.

**react-icons** foi a escolha mais prática visando reduzir a quantidade de linhas que os arquivos SVG deixavam, tornando assim o código geral mais fácil de ser compreendido.

Optei por não utilizar uma biblioteca de componentes prontos pois acrescentaria uma camada de complexidade desnecessária e limitaria as opções de customização ao que o framework permite. Fazendo por conta própria eu tenho mais liberdade para modificar como preferir.

## Melhorias
Algumas melhorias que acrescentei ao escopo do projeto foram:

* DarkMode controlado via ContextAPI e localStorage
* Paginação dos repositórios do usuário, mantendo a filtragem pedida e evitando quebrar o layout com scroll
* Página de 404 (com botão de voltar) para onde os usuários são direcionados ao não encontrar um perfil pesquisado
* Possibilidade de compartilhar o perfil do GitHub por meio da URL (através de rotas dinâmicas /users/:user)
* Lógica aprimorada para o botão de Contato, que vai direcionar o usuário primeiramente para o site do perfil e, caso não tenha, para o Twitter. O botão não é renderizado se o perfil não possuir nenhum dos dois.


## Autor
- [@zaqueu-1](https://www.github.com/zaqueu-1)
Acesse também meu [LinkedIn](https://linkedin.com/in/zaqueu1) e dê uma olhada em meu [portfolio](https://zaqueu.tech)!

