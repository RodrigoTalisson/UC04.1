import { Router } from "express";
import { AlunoController } from "../controllers/AlunoController.js";

const router = Router();

router.get("/", AlunoController.listarAlunos);

router.get("/curso/:curso", AlunoController.buscarPorCurso);

router.get("/idade/:idade", AlunoController.buscarPorIdade);

router.get("/matricula/:matricula", AlunoController.buscarPorMatricula);

router.get("/:id", AlunoController.buscarPorId);

router.post("/", AlunoController.criarAluno);

router.put("/:id", AlunoController.atualizarAluno);

router.delete("/:id", AlunoController.deletarAluno);

export default router;
