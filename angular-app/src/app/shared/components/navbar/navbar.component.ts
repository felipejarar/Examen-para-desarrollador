import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router : Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    console.log("logout");
    this.authenticationService.logout();
    this.router.navigate(['/login']);  
  }

}
