import { Component, OnInit } from '@angular/core';
import { DemoService} from './demo/demo.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DemoService]
})
export class AppComponent {
  title = 'Please login here';
}

