import { alunos } from "../../data/banco.js";

export class AlunoModel {

  static listarTodos() {
    return alunos;
  }

  static buscarPorId(id) {
    return alunos.find(a => a.id === Number(id));
  }

  static buscarPorCurso(curso) {
    return alunos.filter(a => a.curso === curso);
  }

  static buscarPorIdade(idade) {
    return alunos.filter(a => a.idade === idade);
  }

  static buscarPorMatricula(matricula) {
    return alunos.find(a => a.matricula === matricula);
  }

  static criarAluno(nome, idade, curso, matricula) {
    const matriculaExiste = alunos.some(a => a.matricula === matricula);
    if (matriculaExiste) return null;

    const novoAluno = {
      id: alunos.length + 1,
      nome,
      idade,
      curso,
      matricula
    };

    alunos.push(novoAluno);
    return novoAluno;
  }

  static atualizarAluno(id, nome, idade, curso, matricula) {
    const index = alunos.findIndex(a => a.id === Number(id));
    if (index === -1) return null;

    alunos[index] = {
      id: Number(id),
      nome,
      idade,
      curso,
      matricula
    };

    return alunos[index];
  }

  static deletarAluno(id) {
    const index = alunos.findIndex(a => a.id === Number(id));
    if (index === -1) return null;

    return alunos.splice(index, 1)[0];
  }
}







