import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Isession } from 'src/app/models/isession';
import { StoragesessionService } from 'src/app/servicios/storagesession.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = "Admin";
  private pwd = "";

  constructor(public loginService: LoginService){
    
  }

  logIn(){
    this.loginService.login(this.user, this.pwd);
  }

  ngOnInit() {
  }

}
