import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router'
import { DemoService } from '../demo/demo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[DemoService]
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  users:any;
  account:String='';
  password:String='';

  constructor(private modalService:BsModalService, private demoService: DemoService, 
    private router: Router) { }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }

  ngOnInit() {
    return this.demoService.getData().map((response: Response)=>response.json())
    .subscribe(data=>this.users=data);
  }

  formSubmit(){
     this.demoService.login(this.account, this.password);
     this.modalRef.hide();
  }

  register(e){
    e.preventDefault();
    var pass1 = e.target.elements[1].value;
    var pass2 = e.target.elements[2].value;
    if (pass1==pass2){
      this.demoService.testRequest(this.account, this.password);
      this.router.navigate(['home']);
      this.modalRef.hide();
    }
    else{
      alert("Password doesn't match");
    }
  }
}

