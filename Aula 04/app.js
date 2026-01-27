// Importa o framework Express para criar a API
import express from "express";
// Importa as rotas dos alunos
import alunoRouter from "./src/router/AlunoRouter.js";

// Cria uma instância do Express
const app = express();
// Define a porta em que o servidor vai rodar
const PORT = 3000;

// Middleware que converte requisições JSON em objetos JavaScript
app.use(express.json());

// Rota raiz que retorna "Hello World"
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Registra todas as rotas de alunos com prefixo "/alunos"
// Ex: GET /alunos, POST /alunos/:id, etc.
app.use("/alunos", alunoRouter);

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
