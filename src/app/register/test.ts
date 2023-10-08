import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators,FormBuilder,AbstractControl} from '@angular/forms'
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';




function passwordMatchValidator(control: AbstractControl) {

  const password = control.get('password').value;
  const confirmPassword = control.get('confirmPassword').value;

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  } else {
    return null;
  }
}
