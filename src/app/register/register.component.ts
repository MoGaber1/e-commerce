import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators,AbstractControl,FormBuilder, FormControlOptions} from '@angular/forms'
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {



  constructor(private _AuthService:AuthService, private _Router:Router, private _FormBuilder:FormBuilder) {
    if (localStorage.getItem('userToken')!==null){
      _Router.navigate(['/home'])
    }
  }



  isLoading:boolean= false;
  apiError:string = '';


//  registerForm: FormGroup =  this._FormBuilder.group({
//     name: new FormControl  (null, [Validators.required, Validators.minLength(3)]),
//     email: new FormControl (null, [Validators.required, Validators.email]),
//     password: new FormControl (null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
//     rePassword: new FormControl (null),
//     phone: new FormControl (null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),


//   },

//   {validators: [this.passwordMatchValidator]}


//   );


  registerForm:FormGroup = new FormGroup ({
    name : new FormControl(null,[ Validators.required,Validators.minLength(3) ]),
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword : new FormControl(''),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

    }
    , {validators : [this.passwordMatchValidator]}

    )





//    passwordMatchValidator(control: FormGroup):void {
//   const password = control.get('password')?.value;
//   const rePassword = control.get('rePassword')?.value;

//   if (rePassword == '') {
//     password?.setErrors({ required: true }) ;
//   }
//   else if (password !== rePassword) {
//     rePassword?.setErrors({ passwordMismatch: true }) ;
//   }
// }




  passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password')?.value;
  const rePassword = control.get('rePassword')?.value;


  if (!rePassword) {
    return { required: true };

  } else if (password !== rePassword) {
    return { passwordMismatch: true };

  }else {
    return null
  }
  }




handleRegister(registerForm:FormGroup){

  if (registerForm.valid){

    this.isLoading=true;

    this._AuthService.register(registerForm.value).subscribe({

      next:(response) => {
        if (response.message === 'success')

        this.isLoading = false;

        this._Router.navigate(['/login'])
        console.log(response  )
      },

      error:(err) => {
        this.isLoading= false;
        this.apiError = err.error.message;
        console.log(err)
      },
    })

  }


console.log(registerForm);






}

}

