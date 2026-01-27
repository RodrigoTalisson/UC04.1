// Importa o array de alunos do banco de dados
import { alunos } from "../../data/banco.js";

// Model é responsável por manipular os dados dos alunos
export class AlunoModel {

  // Retorna todos os alunos do banco de dados
  static listarTodos() {
    return alunos;
  }

  // Busca um aluno específico pelo ID
  static buscarPorId(id) {
    return alunos.find(a => a.id === Number(id));
  }

  // Busca todos os alunos de um curso específico
  static buscarPorCurso(curso) {
    return alunos.filter(a => a.curso === curso);
  }

  // Busca todos os alunos de uma idade específica
  static buscarPorIdade(idade) {
    return alunos.filter(a => a.idade === Number(idade));
  }

  // Busca um aluno pela matrícula (retorna apenas um)
  static buscarPorMatricula(matricula) {
    return alunos.find(a => a.matricula === matricula);
  }

  // Cria um novo aluno no banco de dados
  static criarAluno(nome, idade, curso, matricula) {
    // Verifica se a matrícula já existe
    const matriculaExiste = alunos.some(
      a => a.matricula === matricula
    );

    // Se existir, retorna null (operação falhou)
    if (matriculaExiste) return null;

    // Cria um novo objeto aluno
    const novoAluno = {
      id: alunos.length + 1,  // ID é o tamanho atual do array + 1
      nome,
      idade,
      curso,
      matricula
    };

    // Adiciona o novo aluno ao array
    alunos.push(novoAluno);
    return novoAluno;
  }

  // Atualiza os dados de um aluno existente
  static atualizarAluno(id, nome, idade, curso, matricula) {
    // Encontra o índice do aluno no array
    const index = alunos.findIndex(
      a => a.id === Number(id)
    );

    // Se não encontrar, retorna null
    if (index === -1) return null;

    // Verifica se a nova matrícula já existe em outro aluno
    const matriculaExiste = alunos.find(
      a => a.matricula === matricula && a.id !== Number(id)
    );

    // Se a matrícula já existe, retorna uma mensagem de erro
    if (matriculaExiste) return "MATRICULA_DUPLICADA";

    // Atualiza o aluno com os novos dados
    alunos[index] = {
      id: Number(id),
      nome,
      idade,
      curso,
      matricula
    };

    return alunos[index];
  }

  // Deleta um aluno do banco de dados
  static deletarAluno(id) {
    // Encontra o índice do aluno
    const index = alunos.findIndex(
      a => a.id === Number(id)
    );

    // Se não encontrar, retorna null
    if (index === -1) return null;

    // Remove o aluno do array e retorna o aluno removido
    return alunos.splice(index, 1)[0];
  }
}
