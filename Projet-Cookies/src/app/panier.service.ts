import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http: HttpClient) { }

  deleteCookieFromPanier(idPanier: any) {
    return this.http.delete("http://localhost:3000/panier/" + idPanier)
  }
}
