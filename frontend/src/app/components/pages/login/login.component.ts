import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) { }
  hide: Boolean = true;

  ngOnInit(): void {
  }
  setHide(){
    this.hide = !this.hide;
  }
  login() {
    if(this.username.split('').length > 0 && this.password.split('').length > 0){
      this.authService.login(this.username, this.password);
    }
  }
}
