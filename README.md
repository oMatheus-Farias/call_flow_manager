# Sistema de Gestão de Chamados

O Sistema de Gestão de Chamados é uma aplicação web desenvolvida para facilitar o registro, organização e acompanhamento eficiente de chamados para uma empresa que oferece serviços de visita técnica, financeira e suporte.

## Funcionalidades Principais

- **Autenticação de Usuário:** Sistema de login seguro com cadastro de usuários, exigindo nome, email e senha.
- **Página de Chamados:** Após o login, os usuários têm acesso a uma página que exibe uma tabela com os chamados registrados, incluindo informações como nome da empresa/cliente, assunto, status (aberto, em progresso, atendido), data de criação do chamado, e opções para editar/atualizar ou acessar mais detalhes.
- **Cadastro de Clientes:** Página dedicada para cadastrar novos clientes, facilitando o gerenciamento de informações relacionadas aos chamados.
- **Página de Perfil:** Os usuários podem visualizar e atualizar suas informações de perfil, incluindo a foto e nome.
- **Logout:** Opção para encerrar a sessão de usuário e sair do sistema, se não realizar o login o usuário não terá acesso às demais páginas, sendo realizada uma proteção de rotas.

## Tecnologias Utilizadas

- ReactJS, Typescript e Tailwindcss
- Banco de Dados: FireBase

## Como Iniciar o Projeto

1. Clone o repositório: `git clone https://github.com/oMatheus-Farias/call_flow_manager.git`>
2. Navegue até o diretório do projeto: `cd call_flow_manager`
3. Instale as dependências: `npm install` (ou use o gerenciador de pacotes apropriado)
4. Inicie o servidor: `npm run dev` (ou use o comando adequado)