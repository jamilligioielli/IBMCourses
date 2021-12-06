package br.com.aulacore.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.aulacore.entidades.Usuario;
import br.com.aulacore.repositorios.RespositorioUsuario;

@Service
//ira buscar, inserir e excluir um usuário
public class ServicoUsuario {
    
    @Autowired
    //fazendo a chamada de todos os usuarios
    RespositorioUsuario repositorioUsuario;

    public List<Usuario> buscarUsuario() {
        return repositorioUsuario.findAll();
    }

    public void inserirUsuario(Usuario usuario) {
        repositorioUsuario.save(usuario);
    }

    public Usuario atualizarUsuario(Usuario usuario) {
        Usuario user = new Usuario();
        user.setIdUsuario(usuario.getIdUsuario());
        user.setNomeUsuario(usuario.getNomeUsuario());
        user.setRgUsuario(usuario.getRgUsuario());
        user.setCpfUsuario(usuario.getCpfUsuario());

        return repositorioUsuario.save(user);
    }

    public void excluirUsuario(Usuario usuario){
        repositorioUsuario.delete(usuario);
    }
}
