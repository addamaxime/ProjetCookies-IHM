import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthentificationService } from 'src/app/utils/services/authentification.service';
import Swal from 'sweetalert2';




class CustomValidators{
  static passwordContainsNumber(control: AbstractControl):ValidationErrors{
    const regex= /\d/;

    if (regex.test(control.value) && control.value !== null){
      return {}
    } else {
      return {passwordInvalid:true}
    }
  }

  static passwordsMatch(control : AbstractControl):ValidationErrors{
    const password = control.get('password')?.value;
    const passwordConfirm = control.get('passwordConfirm')?.value

    if ( (password === passwordConfirm) && (password !== null) && (passwordConfirm !==null)){
      return {}
    } else {
      return {passwordsMatching: true}
    }
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;

  constructor(
    private authService:AuthentificationService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:[null, [Validators.required]],
      username:[null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]],
      password:[null, [
        Validators.required,
        Validators.minLength(1),
        CustomValidators.passwordContainsNumber
      ]],
      passwordConfirm:[null, [Validators.required]]
    }, {
      validators: CustomValidators.passwordsMatch
    })
  }

  onSubmit(){
    console.log("register send")
    if (this.registerForm.invalid){
      return;
    }
    this.authService.register(this.registerForm.value).pipe(
      map(user => this.router.navigate(['login']))
    ).subscribe();
    Swal.fire(
      'Inscription réussie',
      'Votre inscription a bien été prise en compte. Vous pouvez maintenant vous connecter.',
      'success'
    )
  }

}
