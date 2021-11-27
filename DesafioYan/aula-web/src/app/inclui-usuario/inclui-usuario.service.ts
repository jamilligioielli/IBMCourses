import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Usuario } from "../entidade/usuario.entities";

@Injectable({
  providedIn: 'root'
})

export class IncluiUsuarioService{
  constructor(private http: HttpClient) { }

  incluirUsuarios(nomeUsuario:string, cpfUsuario:string, rgUsuario:string): Observable<any>{
    const body = JSON.stringify({nomeUsuario: nomeUsuario, cpfUsuario: cpfUsuario, rgUsuario: rgUsuario});
    return this.http.request("POST", "http://localhost:8080/usuario", {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    })
  }
}


