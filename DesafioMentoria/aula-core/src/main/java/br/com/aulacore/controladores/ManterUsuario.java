package br.com.aulacore.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.aulacore.entidades.Usuario;
import br.com.aulacore.servicos.ServicoUsuario;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuario")
public class ManterUsuario {
    
    @Autowired
    ServicoUsuario servicoUsuario;

    @GetMapping
    @ResponseBody
    public List<Usuario> buscarUsuarios() {
        return servicoUsuario.buscarUsuario();
    }

    @PostMapping
    @ResponseBody
    public void insertUsuario(@RequestBody Usuario usuario) {
        servicoUsuario.inserirUsuario(usuario);
    }
    
    @PutMapping
    @ResponseBody
    public Usuario atualizarUsuario(@RequestBody Usuario usuario) {
        return servicoUsuario.atualizarUsuario(usuario);
    }

    @DeleteMapping
    @ResponseBody
    public void excluirUsuario(@RequestBody Usuario usuario) {
        servicoUsuario.excluirUsuario(usuario);
    }
}
