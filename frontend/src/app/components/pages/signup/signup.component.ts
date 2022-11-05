import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public username: string = "";
  public email: string = "";
  public confirmEmail: string = "";
  public institution: string = "";
  public role: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  public check: Boolean = false;
  hide: Boolean = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  setHide() {
    this.hide = !this.hide;
  }
  signUp() {
    let dataUser: User = new User();
    if(this.confirmEmail == this.email && this.password == this.confirmPassword && localStorage.getItem(this.username) === null && this.email.split('').length > 0 && this.username.split('').length > 0 && this.institution.split('').length > 0 && this.password.split('').length > 0 && this.role.split('').length > 0 && this.check){
      dataUser.email = this.email;
      dataUser.username = this.username;
      dataUser.institution = this.institution;
      dataUser.role = this.role;
      dataUser.password = this.password;
      this.authService.signUp(dataUser);
    }else {
      alert("Houve um erro!") 
    }
  }

}
