import { Component, OnInit } from '@angular/core';
// import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
// import { NgModel } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';

//import { ViewChild, ElementRef } from '@angular/core';
import { DemoService } from '../demo/demo.service';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DemoService]
})

export class LoginComponent implements OnInit {
  // data: Object = {};
  //@ViewChild('closeBtn') closeBtn: ElementRef;

  modalRef: BsModalRef;
  users:any;
  name:String='';

  constructor(private modalService:BsModalService, private demoService: DemoService, 
    private router: Router) { }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(username == 'admin' && password == 'admin'){
      this.router.navigate(['home']);
      //this.closeModal();
    }
  }

  // closeModal():void{
  //   this.closeBtn.nativeElement.click();
  // }

  formSubmit(item){
    for(let i=0; i< this.users.length; i++){
      if(this.users[i].name === item.name){
        console.log("User Found",this.users[i]);
      }
    }
  }

  ngOnInit() {
    this.demoService.getData().subscribe(data=>this.users=data);
    console.log(this.users);
  }


}

