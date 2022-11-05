import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide: Boolean = true;
  ngOnInit(): void {
  }
  setHide(){
    this.hide = !this.hide;
  }

}
