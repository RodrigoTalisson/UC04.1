import { usuario } from "../../data/banco.js";

export class UsuarioModel {

  static listarTodos() {
    return usuario;
  }

  static buscarPorId(id) {
    return usuario.find(u => u.id === Number(id));
  }

  static criarUsuario(nome, email, telefone) {
    const novoUsuario = {
      id: usuario.length + 1,
      nome,
      email,
      telefone
    };

    usuario.push(novoUsuario);
    return novoUsuario;
  }

  static atualizarUsuario(id, nome, email, telefone) {
    const index = usuario.findIndex(u => u.id === Number(id));

    if (index === -1) return null;

    usuario[index] = {
      id: Number(id),
      nome,
      email,
      telefone
    };

    return usuario[index];
  }

  static deletarUsuario(id) {
    const index = usuario.findIndex(u => u.id === Number(id));
    if (index === -1) return null;

    return usuario.splice(index, 1);
  }
  static deletarUsuario(id) {
    const index = usuario.findIndex(u => u.id === Number(id));

    if (index === -1) return null;

    usuario.splice(index, 1);
    return true;
  }
}








