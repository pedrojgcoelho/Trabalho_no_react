[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7A-39u17)
# Projeto 01 - React Hooks

Este repositório contém um projeto React que utiliza os Hooks `useState` e `useEffect` para criar um aplicativo que permite o usuário adicionar uma lista de pensamentos (entries) que devem automaticamente desaparecer após alguns segundos:

![Projeto 01 - React Hooks](/docs/entry-app.gif)


Também é possível clicar no botão "X" para deletar cada entrada individualmente, sem esperar o timer. Conteúdo vazio ou tempo de duração negativo não são permitidos.

## Atividade

Este projeto deve ter sido clonado através de um [fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) facilitado pelo GitHub Classroom. Aqui você encontrará a aplicação incompleta, com dicas para como alterar o código para que ela funcione corretamente, como mostra o gif acima. 

Os testes são nossa referência _canônica_ para o que é esperado do projeto. Ou seja, pode considerar que se os testes estiverem passando, você automaticamente tem a pontuação máxima da atividade. É possível conseguir pontuação parcial se conseguir fazer parte dos testes passarem.

## Instruções

- **Trabalho Individual**. Cada aluno deve entregar a sua versão do projeto. 
- O prazo de entrega é até 10/04/2024, às 20h49min.
- Não alterar nada nos arquivos de teste. 
- As alterações devem ser entregues no formato de um Pull Request neste repositório:
    - O _branch_ do seu _fork_ deve ser `entrega`.
    - O _Pull Request_ deve ser para o _branch_ `main` deste repositório.
    - Pedir a revisão (@vschettino) no _Pull Request_.
    - Se atribuir ao PR (_assign to myself_).
    - Os testes vão rodar automaticamente, mostrando o resultado no _Pull Request_ e na aba _checks_.

## Checklist
> [!NOTE]  
> A melhor referência para entender o que precisa ser feito é o código dos testes (em `/tests/*`). Eles descrevem o comportamento esperado do sistema em uma linguagem acessível.

As seguintes correções precisam ser feitas no código para que a aplicação funcione corretamente:

- Implementar uma função chamada `removeEntry` em App.js e passe como um `prop` para o formulário. Isso deve fazer com que o botão de deletar funcione corretamente.
- Quando clicamos no botão de adicionar, o formulário `<form>` está fazendo com que a página atualize, um comportamento padrão de formulários HTML. Isso faz com que o nosso novo item suma rapidamente da tela.
- Implementar a lógica básica do `handleSubmit` do form para adicionar uma nova entrada à lista de `entries` usando o método que já existe `addEntry()`.
- Implementar a lógica do `useEffect` em `<Entry>` para disparar o timer que remove a entrada após o tempo especificado.
- Implementar a lógica de validação dos dados no formulário (ou seja, no `handleSubmit` antes de chamar `addEntry`). Não permitir que o usuário adicione uma entrada vazia ou com um tempo negativo.

## Rodando o projeto
> [!NOTE]  
> Você precisa ter configurado o básico do ambiente com o Git e Node.js instalados.

Depois de clonar o repositório (`git clone`), você primeiro deve entrar na pasta do projeto para rodar os comandos a partir daquele contexto:

```bash
cd nome-do-repositorio
```
Instale as dependências do projeto:

```bash
npm install
```

A partir daí é possível rodar os comandos especificados no `package.json`:

```bash
npm run dev # rodar o servidor local para desenvolvimento
npm run test # rodar os testes
```

## Referências
- https://react.dev/learn/synchronizing-with-effects
- https://testing-library.com/
- https://www.w3.org/TR/accname-1.1/
- https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a
- https://react.dev/learn/managing-state
