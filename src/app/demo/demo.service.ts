import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Injectable()
export class DemoService {

  constructor(private http: Http) {}

  account:string = "";
  password:string = "";

  //modalRef: BsModalRef;

  getData():any{
  	return this.http.get("http://localhost:3000/api/account")
  };

  create(account:string=''):any{
  	this.http.post("http://localhost:3000/api/addaccount","account="+account);
  }

  getImage():any{
    return this.http.get("http://localhost:3333/api/images")
  };

  login(account, password){
    var body = "account=" + account + "&password=" + password;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    this.http.post("http://localhost:3000/api/login",
      body,{
        headers: headers,
      })
      .subscribe(res=>{
        let acc = JSON.parse((<any>res)._body);
        alert(`Sucessfully login ${acc.account}`);
        //this.modalRef.hide();
      },error=>{
        alert("Login fail");
      })
  }

  testRequest(account,password){
  	var body = "account=" + account + "&password=" + password;

  	var headers = new Headers();
  	headers.append('Content-Type','application/x-www-form-urlencoded');
  	this.http.post("http://localhost:3000/api/addaccount",
  		body,{
  			headers: headers,
  		})
  		.subscribe(data=>{
  			alert('Sucessfully registered');
  		},error=>{
  			console.log(JSON.stringify(error.json()));
  		})
  }
}
