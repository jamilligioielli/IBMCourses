import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Usuario } from "../entidade/usuario.entities";

@Injectable({
  providedIn: 'root'
})

export class ListaUsuarioService {


  constructor(private http: HttpClient) { }

  listarUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(
      `http://localhost:8080/usuario`
    );
  }

  atualizarUsuarios(usuario: Usuario): Observable<any>{

    return this.http.request("PUT", "http://localhost:8080/usuario", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: usuario
    })
  }

  excluirUsuarios(usuario: Usuario): Observable<any>{
    const body = JSON.stringify(usuario);

    return this.http.request("DELETE", "http://localhost:8080/usuario", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    })
  }
}


