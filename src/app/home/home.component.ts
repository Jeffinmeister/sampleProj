import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header:any;

  constructor(private config: ConfigService) { }

  ngOnInit(){
    this.header = this.getHeader();
    console.log(this.header);
  }

  getHeader() {
    return this.config.getconfig().header; 
  }

}
