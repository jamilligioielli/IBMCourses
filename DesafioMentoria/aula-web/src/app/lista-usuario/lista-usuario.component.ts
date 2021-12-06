import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario.entities';
import { ListaUsuarioService } from './lista-usuario.service';
import { IncluiUsuarioService } from '../inclui-usuario/inclui-usuario.service';
//Chamando o backend e trazendo a respsosta da query com os dados do usuario

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  constructor(private listaUsuarioService: ListaUsuarioService) { }

  listausuario: Usuario[] = [];
  usuarioData: Usuario = {
    idUsuario: 0,
    nomeUsuario: '',
    cpfUsuario: '',
    rgUsuario: ''
  };

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista(): void{
    this.listaUsuarioService.listarUsuarios().subscribe(resp=> {
      this.listausuario = resp;
    });
  }

  editar(usuario: Usuario): void {
      this.usuarioData = usuario;
  }

  atualizar(): void{
    this.listaUsuarioService.atualizarUsuarios(this.usuarioData).subscribe(resp => {
      alert("Usuario Atualizado");
     })
  }


  excluir(usuario: Usuario): void {
    this.listaUsuarioService.excluirUsuarios(usuario).subscribe(resp=> {
      this.carregarLista();
    })
  }

}
