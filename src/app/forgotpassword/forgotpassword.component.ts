import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  constructor (private _AuthService:AuthService, private _Router:Router ){}

step1:boolean = true;
step2:boolean = false;
step3:boolean = false;

email:string=''
emailError:string = ''
codeError:string = ''



forgotPassForm:FormGroup = new FormGroup ({
  email : new FormControl (null, [Validators.required, Validators.email])
})
resetCodeForm:FormGroup = new FormGroup ({
  resetCode : new FormControl (null, [Validators.required])
})
newPassForm:FormGroup = new FormGroup ({
  newPassword : new FormControl (null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
  confirmNewPassword : new FormControl (null, [Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)])
},
{validators : [this.passwordMatchValidator]}
)




forgotPassword (){
  let userEmail = this.forgotPassForm.value
  this.email = userEmail.email

this._AuthService.forgotPassword(userEmail).subscribe({

  next:(response)=>{
this.step1 = false
this.step2 = true
console.log(response);

  },

  error:(err)=>
   this.emailError = err.error.message

})
}




resetCode (){
  let userEmail = this.forgotPassForm.value
  this.email = userEmail.email

  let resetCode = this.resetCodeForm.value

  this._AuthService.resetCode(resetCode).subscribe({
    next : (response)=> {
      console.log(response),
      this.step2=false,
      this.step3 = true
    },
    error: (err)=>{
      console.log(err);
      this.codeError = err.error.message
    }
  })


}

setNewPass (){

  const newPassword = this.newPassForm.get('newPassword')?.value

  const newPassData = {
    newPassword : newPassword,
    email:this.email
  }

  // let newPassData = this.newPassForm.value
// newPassData.email = this.email

this._AuthService.resetPass(newPassData).subscribe({
next:(response)=>{
  console.log(response);
  if(response.token){
localStorage.setItem('reToken',response.token)
this._Router.navigate(['/home'])

  }
},
error:(err)=>{console.log(err);
}
})
}



passwordMatchValidator(control: AbstractControl) {
  const password = control.get('newPassword')?.value;
  const rePassword = control.get('confirmNewPassword')?.value;


  if (!rePassword) {
    return { required: true };

  } else if (password !== rePassword) {
    return { passwordMismatch: true };

  }else {
    return null
  }
}


}


