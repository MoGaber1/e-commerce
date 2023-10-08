import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  registerRouter(){

    this._Router.navigate(['/register'])

  }



  constructor(private _AuthService:AuthService, private _Router:Router) {

if (localStorage.getItem('userToken')!==null){
  _Router.navigate(['/home'])
}
  }

  isLoading:boolean= false;
  apiError:string = '';

loginForm:FormGroup = new FormGroup ({
  email : new FormControl(null, [Validators.required, Validators.email]),
  password : new FormControl(null,[Validators.required]),
})

handleLogin(loginForm:FormGroup){

  if (loginForm.valid){

    this.isLoading=true;

    this._AuthService.login(loginForm.value).subscribe({

      next:(response) => {
        if (response.message === 'success'){

          localStorage.setItem('userToken',response.token)
          this._AuthService.decodeUserData();

          this.isLoading = false;

          this._Router.navigate(['/home'])

        }

      },

      error:(err) => {
        this.isLoading= false;
        this.apiError = err.error.message;
        console.log(err)
      },
    })

  }


}

}
