package br.com.aulacore.entidades;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="USR")
public class Usuario {
    
    @Id
    @Column(name="ID_USR")
    private int idUsuario;

    @Basic
    @Column(name="NOME_USR")
    private int nomeUsuario;

    @Basic
    @Column(name="CPF_USR")
    private int cpfUsuario;

    @Basic
    @Column(name="RG_USR")
    private int rgUsuario;
}
