import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICookie } from '../modeles/icookie';
import { IUser } from '../modeles/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  listeUsers: Array<IUser> = [];

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    return this.http.get<Array<IUser>>("http://localhost:3000/users").subscribe(
      data => {
        this.listeUsers = data
      }
    )
  }

  deleteUser(id: any) {
    return this.http.delete("http://localhost:3000/users/" + id)
  }

  getCurrentUser(id : any){
    return this.http.get<IUser>("http://localhost:3000/users/" + id)
  }

  getUsersAndFindOneWithMail(userMail : any):any{
   return this.http.get<any>("http://localhost:3000/users")
  }

  
}
