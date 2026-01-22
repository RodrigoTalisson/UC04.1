import { UsuarioModel } from "../models/usuario/UsuarioModel.js";

export class UsuarioController {

  static listarUsuarios(req, res) {
    res.status(200).json(UsuarioModel.listarTodos());
  }

  static buscarPorId(req, res) {
    const usuario = UsuarioModel.buscarPorId(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuario);
  }

  static criarUsuario(req, res) {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
      return res.status(400).json({ mensagem: "Preencha todos os campos" });
    }

    const novoUsuario = UsuarioModel.criarUsuario(nome, email, telefone);
    res.status(201).json(novoUsuario);
  }

  static atualizarUsuario(req, res) {
    const { nome, email, telefone } = req.body;

    const usuarioAtualizado = UsuarioModel.atualizarUsuario(
      req.params.id,
      nome,
      email,
      telefone
    );

    if (!usuarioAtualizado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuarioAtualizado);
  }

  static deletarUsuario(req, res) {
    const usuario = UsuarioModel.deletarUsuario(req.params.id);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json({ mensagem: "Usuário removido com sucesso" });
  }


  static deletarUsuario(req, res) {
    const deletado = UsuarioModel.deletarUsuario(req.params.id);

    if (!deletado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json({ mensagem: "Usuário deletado com sucesso" });
  }
}

