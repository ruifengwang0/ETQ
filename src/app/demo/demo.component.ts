import { Component, OnInit } from '@angular/core';
import {DemoService} from './demo.service'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[DemoService]
})
export class DemoComponent implements OnInit {

  constructor(private demoService: DemoService) { 
    //this.GetAll();
     
  }
  users:{};
  //users:any;
  //name:string="my name";
  GetAll(){
  	this.demoService.getData().map(response=>response.json()).subscribe(data=>this.users=data);
    console.log(this.users)
  }
  ngOnInit() {
  }

}
