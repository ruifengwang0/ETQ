import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor( private http: Http) { }

  getData():any{
  	return this.http.get("http://localhost:3000/api/account");
  }

}
