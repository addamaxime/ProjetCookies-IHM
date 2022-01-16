import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import { StatutService } from 'src/app/utils/services/statut.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private authService : AuthentificationService,
    private statutServ : StatutService,
    private router: Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]),
      password: new FormControl(null, [
        Validators.required, 
        Validators.minLength(3)
      ])
    })
  }


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.loginAdmin(this.loginForm)
  }

}
