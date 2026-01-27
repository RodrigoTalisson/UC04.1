// Importa o model que contém a lógica de dados dos alunos
import { AlunoModel } from "../models/aluno/AlunoModel.js";

// Controller é responsável por receber requisições HTTP e enviar respostas
export class AlunoController {

  // Lista todos os alunos - GET /alunos
  static listarAlunos(req, res) {
    return res.status(200).json(AlunoModel.listarTodos());
  }

  // Busca um aluno específico pelo ID - GET /alunos/:id
  static buscarPorId(req, res) {
    const aluno = AlunoModel.buscarPorId(req.params.id);

    if (!aluno) {
      return res.status(404).json({ msg: "Aluno não encontrado" });
    }

    return res.status(200).json(aluno);
  }

  // Cria um novo aluno - POST /alunos
  static criarAluno(req, res) {
    // Extrai os dados do corpo da requisição
    const { nome, idade, curso, matricula } = req.body;

    // Valida se todos os campos foram preenchidos
    if (!nome || !idade || !curso || !matricula) {
      return res.status(400).json({ msg: "Todos os campos são obrigatórios" });
    }

    // Valida se a idade é maior ou igual a 16
    if (idade < 16) {
      return res.status(400).json({ msg: "Idade mínima é 16 anos" });
    }

    // Verifica se a matrícula já existe
    if (AlunoModel.buscarPorMatricula(matricula)) {
      return res.status(400).json({ msg: "Matrícula já existe" });
    }

    // Cria o aluno no banco de dados
    const aluno = AlunoModel.criar({ nome, idade, curso, matricula });

    // Retorna status 201 (Created) com os dados do aluno criado
    return res.status(201).json({
      msg: "Aluno criado com sucesso",
      aluno
    });
  }

  // Atualiza os dados de um aluno - PUT /alunos/:id
  static atualizarAluno(req, res) {
    const { id } = req.params;
    const { nome, idade, curso, matricula } = req.body;

    // Busca o aluno que será atualizado
    const aluno = AlunoModel.buscarPorId(id);

    if (!aluno) {
      return res.status(404).json({ msg: "Aluno não encontrado" });
    }

    // Valida a idade mínima
    if (idade < 16) {
      return res.status(400).json({ msg: "Idade mínima é 16 anos" });
    }

    // Verifica se a nova matrícula já existe em outro aluno
    const matriculaExiste = AlunoModel.buscarPorMatricula(matricula);

    if (matriculaExiste && matriculaExiste.id != id) {
      return res.status(400).json({ msg: "Matrícula já usada por outro aluno" });
    }

    // Atualiza os dados do aluno
    aluno.nome = nome;
    aluno.idade = idade;
    aluno.curso = curso;
    aluno.matricula = matricula;

    return res.status(200).json({
      msg: "Aluno atualizado com sucesso",
      aluno
    });
  }

  // Deleta um aluno - DELETE /alunos/:id
  static deletarAluno(req, res) {
    const aluno = AlunoModel.deletar(req.params.id);

    if (!aluno) {
      return res.status(404).json({ msg: "Aluno não encontrado" });
    }

    return res.status(200).json({
      msg: "Aluno removido com sucesso",
      aluno
    });
  }
}
