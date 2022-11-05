import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { NgSwitchCase } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {

  }
  signUp(userData: User) {
    localStorage.setItem(userData.username as string, JSON.stringify(userData));
    this.router.navigate(['/']);
  }
  login(username: string, password: string) {
    let userData: User | any =  JSON.parse(localStorage.getItem(username) as string) as User;
    if(userData !== null && userData.password === password){
      sessionStorage.setItem('loggedUser', JSON.stringify(userData));
      this.router.navigate(['/home']);
    }else{
      alert("An error has occurred, check the fields");
    }
  }
}
