import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import { UsersService } from 'src/app/utils/services/users.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {
  user: any

  constructor(private userServ: UsersService, private authServ: AuthentificationService) {
  }

  ngOnInit(): void {
    this.getOneUserWithMail()
  }

  getOneUserWithMail() {
    console.log(this.authServ.decrypt(localStorage.getItem('loggedUser')))
    this.userServ.getUsersAndFindOneWithMail(this.authServ.decrypt(localStorage.getItem('loggedUser'))).subscribe(
      (      res: any[]) => {
        this.user = res.find((a: any) => {
          return a.email === this.authServ.decrypt(localStorage.getItem('loggedUser'))
        })
      })
  }
}
