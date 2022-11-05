import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userData?: User;
  constructor(private authService: AuthService, private router: Router) {
    try{
      this.userData = JSON.parse(sessionStorage['loggedUser']) as User;
    }catch{
      router.navigate(['/']);
    }
  }
  ngOnInit(): void {

  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
