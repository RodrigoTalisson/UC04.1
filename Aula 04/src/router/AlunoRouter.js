// Importa o Router do Express para criar rotas
import { Router } from "express";
// Importa o controller que contém a lógica das requisições
import { AlunoController } from "../controllers/AlunoController.js";

// Cria uma instância do Router
const router = Router();

// GET /alunos - Lista todos os alunos
router.get("/", AlunoController.listarAlunos);

// GET /alunos/:id - Busca um aluno pelo ID
router.get("/:id", AlunoController.buscarPorId);

// POST /alunos - Cria um novo aluno
router.post("/", AlunoController.criarAluno);

// PUT /alunos/:id - Atualiza os dados de um aluno
router.put("/:id", AlunoController.atualizarAluno);

// DELETE /alunos/:id - Remove um aluno pelo ID
router.delete("/:id", AlunoController.deletarAluno);

// Exporta o router para ser usado no app.js
export default router;

