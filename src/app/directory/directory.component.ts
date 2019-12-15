import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo/demo.service';
import { Router } from '@angular/router'

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination'; 

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:[DemoService],
  // template:	`
  // <ul>
  // 	<li *ngFor="let item of men | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
  // </ul>
  // <pagination-controls (pageChange)="p = $event"></pagination-controls>
  // `
})

export class DirectoryComponent implements OnInit {
  users:any;
 
  men = [
  	{name:"one", hash:"5af0b3ef968ee439f4e90962"},
  	{name:"two", hash:"5af0b40fd0061e371ced04a6"},
  	{name:"three", hash:"5af0b41a4abeeb3904afdaf6"},
  	{name:"four", hash:"5af0b42a00c80c2d6c5ec1ed"},
  	{name:"five", hash:"5af0b5103311060458a43db5"},
  	{name:"six", hash:"5af0b51c2336f80b483bfa2c"},
  	{name:"seven", hash:"5af0b527419f5d330c919274"},
  	{name:"eight", hash:"5af0b6121f578c0518b57215"},
  	{name:"nine", hash:"5af0b6c7b109c9391c53174c"},
  	{name:"ten", hash:"5af0b6dffe27df10e02e0eb4"},
  	{name:"eleven", hash:"5af0b6efd4fff33b440261a3"},
  	{name:"twelve", hash:"5af0b6fb36e53223200e49bf"},
  ];

  constructor(private demoService: DemoService, 
    private router: Router) { }

  ngOnInit() {
    return this.demoService.getImage().map((response: Response)=>response.json())
    .subscribe(data=>this.users=data);
  }

  display(){
  	var x = this.demoService.getImage();
  	console.log(x);
  	return x;
  }

}
