import { Injectable } from '@angular/core';
import { EmpleadosService } from './empleados.service';
import { EmpleadosToAJSON } from '../models/empleados';
import { Router } from '@angular/router';
import { StoragesessionService } from './storagesession.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Empleado: any;

  constructor(
    public api: EmpleadosService,
    private router:Router,
    private storageSession:StoragesessionService
  ) { }

  rdo = false;

  login(user:string, password:string){
    this.storageSession.setSessionLoggedOut();
    this.api.getEmpleado(user).subscribe(res => {
      this.Empleado = EmpleadosToAJSON(res);
      if(this.Empleado.length>0){
        if(password == this.Empleado[0].Clave){
          let token = "token";
          let u = {username:user, token:token};
          this.storageSession.setSessionLogedIn(u);
          this.router.navigateByUrl('/home');
        }
      }
    }, err => {

    });
  }
}
