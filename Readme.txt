Objetivo: Criar um aplicativo em NodeJS que simule site de emprego:

Site de busca de emprego.

Funcionalidades:
Cadastro de Vagas:
	Permitir o cadastro de novas vagas, preenchendo o campo de titulo da vaga, atribuições,
nome da empresa, email da empresa e salário.
	Armazenar os dados da vaga em um banco de dados(SQLlite).

Consultar vagas em aberto:
	Permitir acessar a vaga e ler as informações da mesma.

Visualização de todas as vagas na página principal:
	Mostrar a lista de vagas em aberto.
	Mostrar quando a vaga é cadastrada como (nova vaga).

Tecnologias:
	NodeJS: Ambiente de desenvolvimento para o back-end.
	SQLLITE: base de dados relacional de código aberto.
	Body-parser: Módulo atuante como intermediário para processar dados enviado pelo cliente.
	Express: Frameword para desenvolvimento de aplicações web em Node.js para APIS.
	Express-handlebars: Biblioteca para usar layouts HTML dinâmicos.
	sequelize: Biblioteca para criar uma ponte entre o código e o Banco de Dados (SQLLITE).
	Nodemon: Monitor de alterações de arquivos e um reniciador automático.