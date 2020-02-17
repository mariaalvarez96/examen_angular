import { Injectable } from '@angular/core';
import { Empleados } from '../models/empleados';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {LogM} from '../shared/log';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  public API_ENDPOINT;
  public Config;

  constructor(private http: HttpClient,public router: Router) { 
    LogM(this.API_ENDPOINT);
    this.Config=JSON.parse(localStorage.getItem('ConfigTest'));
    if (this.Config)
        this.API_ENDPOINT = 'http://'+this.Config.IP+'/www/Angular/api.php';
    else
        this.API_ENDPOINT = 'http://localhost/www/Angular/api.php'; 
        
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {    
      LogM(error);
      this.router.navigateByUrl('/config');
      return of(result as T);
    };
  }

  getEmpleados(): Observable<Empleados[]> {
    let rdo = null;
    LogM(this.API_ENDPOINT);
    if (this.urlExists(this.API_ENDPOINT + '/empleados'))  { 
        rdo=this.http.get<Empleados[]>(this.API_ENDPOINT + '/empleados').pipe(
            tap(product => LogM('Obtener empleados')),
            catchError(this.handleError('getEmpleados', []))
            );    
    } 
    return rdo;
  }

  getEmpleado(user: any): Observable<Empleados> {
    return this.http.get<Empleados>(this.API_ENDPOINT + '/empleados?filter[]=Empleado,eq,'+user).pipe(
      tap(_ => LogM(`Obtener producto`)),
      catchError(this.handleError<Empleados>(`getEmpleado`))
    );
  }

  urlExists(url) {
    return fetch(url, {mode: "no-cors"}).then(res => true).catch(err => false)
  }
}


  


