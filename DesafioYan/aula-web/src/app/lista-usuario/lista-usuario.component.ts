import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario.entities';
import { ListaUsuarioService } from './lista-usuario.service';
//Chamando o backend e trazendo a respsosta da query com os dados do usuario

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  constructor(private listaUsuarioService: ListaUsuarioService) { }

  listausuario: Usuario[] = [];

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista(): void{
    this.listaUsuarioService.listarUsuarios().subscribe(resp=> {
      this.listausuario = resp;
    });
  }

  excluir(usuario: Usuario): void {
    this.listaUsuarioService.excluirUsuarios(usuario).subscribe(resp=> {
      this.carregarLista();
    })
  }

}
