import { Component, OnInit } from '@angular/core';
import { IncluiUsuarioService } from './inclui-usuario.service';


@Component({
  selector: 'app-inclui-usuario',
  templateUrl: './inclui-usuario.component.html',
  styleUrls: ['./inclui-usuario.component.css']
})
export class IncluiUsuarioComponent implements OnInit {

  constructor(private incluiUsuarioService: IncluiUsuarioService) { }

  nomeUsuario!: string;
  cpfUsuario!: string;
  rgUsuario!: string;

  ngOnInit(): void {
  }

  salvar(): void {
    this.incluiUsuarioService.incluirUsuarios(this.nomeUsuario, this.cpfUsuario, this.rgUsuario).subscribe(resp=> {
      alert("Usuario Salvo");
    });
  }
}
