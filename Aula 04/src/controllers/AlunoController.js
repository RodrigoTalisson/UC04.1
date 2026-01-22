import { AlunoModel } from "../models/aluno/AlunoModel.js";

export class AlunoController {

  static listarAlunos(req, res) {
    res.status(200).json(AlunoModel.listarTodos());
  }

  static buscarPorId(req, res) {
    const aluno = AlunoModel.buscarPorId(req.params.id);

    if (!aluno) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.status(200).json(aluno);
  }

  static buscarPorCurso(req, res) {
    const alunos = AlunoModel.buscarPorCurso(req.params.curso);
    res.status(200).json(alunos);
  }

  static buscarPorIdade(req, res) {
    const idade = Number(req.params.idade);

    if (idade < 16) {
      return res.status(400).json({ mensagem: "Idade não pode ser menor de 16 anos" });
    }

    const alunos = AlunoModel.buscarPorIdade(idade);
    res.status(200).json(alunos);
  }

  static buscarPorMatricula(req, res) {
    const aluno = AlunoModel.buscarPorMatricula(req.params.matricula);

    if (!aluno) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.status(200).json(aluno);
  }

  static criarAluno(req, res) {
    const { nome, idade, curso, matricula } = req.body;

    if (!nome || !idade || !curso || !matricula) {
      return res.status(400).json({ mensagem: "Preencha todos os campos" });
    }

    if (idade < 16) {
      return res.status(400).json({ mensagem: "Idade mínima é 16 anos" });
    }

    const novoAluno = AlunoModel.criarAluno(nome, idade, curso, matricula);

    if (!novoAluno) {
      return res.status(400).json({ mensagem: "Matrícula já existente" });
    }

    res.status(201).json(novoAluno);
  }

  static atualizarAluno(req, res) {
    const { nome, idade, curso, matricula } = req.body;

    const alunoAtualizado = AlunoModel.atualizarAluno(
      req.params.id,
      nome,
      idade,
      curso,
      matricula
    );

    if (!alunoAtualizado) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.status(200).json(alunoAtualizado);
  }

  static deletarAluno(req, res) {
    const aluno = AlunoModel.deletarAluno(req.params.id);

    if (!aluno) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    res.status(200).json({ mensagem: "Aluno removido com sucesso" });
  }
}
