import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

	modalRef: BsModalRef;
  constructor(private modalService: BsModalService, 
  	private router : Router) {}
 
  openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }

    ngOnInit() {
  }

  // openModal(t){
  // 	debugger
  // 	this.modalRef = this.modalService.show(t);
  // 	this.router.navigate(['/dashboard']);
  // }
}
