import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/utils/services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(public usersServ: UsersService) { }

  ngOnInit(): void {
  }

  deleteUser(item: any) {
    console.warn("okey")
    this.usersServ.listeUsers.splice(item.id, 1)
    this.usersServ.deleteUser(item.id).subscribe((result) => {
      console.warn("result", result)
    })
  }

}
