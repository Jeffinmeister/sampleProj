import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  social = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.social = this.getsocial();
    console.log(this.social);
  }

  getsocial() {
    return this.config.getconfig().social;
  }


}
