import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginName: String = "";
  constructor(private router : Router) { }

  ngOnInit() {
  }

  logIn():void{
    let loginName2 = "";
    if(this.loginName.length > 0){
      this.router.navigate(["dashboard"]);
    }
  }

}
