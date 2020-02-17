import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  public Config={IP:"localhost"};
  public IP = "localhost";


  constructor(public router:Router) {
    this.Config=JSON.parse(localStorage.getItem('configIp'));
    if(this.Config) this.IP=this.Config.IP;
  }

  ngOnInit() {
  }

  FormSubmit(){
    this.Config={IP:this.IP};
    localStorage.setItem('ConfigIp', JSON.stringify(this.Config));
    this.router.navigate([ '/home']);
  }

  exit(){
    this.router.navigateByUrl('/login');
  }

}