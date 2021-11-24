package br.com.aulacore.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.aulacore.entidades.Usuario;

@Repository
public interface RespositorioUsuario extends JpaRepository<Usuario, Long> {
}
