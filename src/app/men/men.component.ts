import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo/demo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
	users:any;

  constructor(private demoService: DemoService, 
    private router: Router) { }

  ngOnInit() {
    return this.demoService.getData().map((response: Response)=>response.json())
    .subscribe(data=>this.users=data);
  }

}
