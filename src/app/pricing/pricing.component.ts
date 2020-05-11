import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing:any;
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.pricing = this.getPricing();
    console.log(this.pricing);
  }

  getPricing() {
    return this.config.getconfig().pricing;
  }

}
