import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input()
  name: String = "";
  email: String = "";
  confirmEmail: String = "";
  institution: String = "";
  role: String = "";
  password: String = "";
  confirmPassword: String = "";

  hide: Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  setHide() {
    this.hide = !this.hide;
  }

}
