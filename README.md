# To Do App

Este repositório faz parte das atividades do curso Dev Full Stack da MaisPraTi, onde esta atividade consiste em desenvolver uma aplicação simples de lista de tarefas com diversos requisitos.

## Estrutura do Projeto

A estrutura do projeto é desenvolvida para ser uma lista de tarefas simples, porém com funcionalidades essenciais para uma boa experiência ao usuário.

Componentes e Funcionalidades:

- Estrutura do Aplicativo:

    + Interface: Possui um campo de texto para adicionar tarefas e um botão de registro.

    + Lista de Tarefas: Exibe cada tarefa adicionada em uma lista visível na página.

- Funcionalidades CRUD:

    + Criar : Permite ao usuário adicionar novas tarefas à lista.

    + Ler (Read): Carrega automaticamente as tarefas a partir do localStorage ao abrir a aplicação.

    + Editar: Cada tarefa tem a opção de ser editada, permitindo que o texto da tarefa seja alterado ao clicar em "Editar".

    + Excluir: Cada tarefa tem a opção de ser excluída, removendo-a da lista e do localStorage.

    + Concluir: A tarefa pode ser concluida, sendo estilizado o campo de texto para mostrar ao usuário que foi concluída.

 - Persistência de Dados:

    + localStorage: Utiliza o localStorage para salvar as tarefas, garantindo que as informações persistam mesmo após o fechamento ou recarregamento da página.

 - Estilização:

   + Utiliza Tailwind CSS para estilizar a aplicação, garantindo uma aparência limpa e moderna. Estilizado os botões de edição e exclusão, além da lista de tarefas, para uma melhor experiência visual.
    Adicionado a capacidade de marcar uma tarefa como "concluída", aplicando uma estilização diferenciada para indicar o status de conclusão.


## Tecnologias Utilizadas

- HTML: Estrutura básica da interface com campos de entrada, lista de tarefas e botões.

- CSS (Tailwind): Utilizado classes da biblioteca escolhida diretamente no HTML para estilizar a aplicação.

- JavaScript: Lógica para adicionar, salvar, carregar, editar, marcar como concluída e excluir tarefas, integrando com o localStorage para persistência de dados.


## Como Visualizar o Projeto Localmente

1.Clone este repositório:

```bash
https://github.com/Marcelors28/atividade_05.git
```
2. Abra o arquivo index.html em um navegador.

## Instruções de Uso
Utilize o campo "adicione uma nova tarefa" para adicionar uma tarefa, edite, conclua, exclua e ou adicione mais tarefas.

## APIs Utilizadas
- CSS (Tailwind): Utilizado classes da biblioteca para estilizar a aplicação.

## Licença
Este projeto é licenciado sob a MIT License.
