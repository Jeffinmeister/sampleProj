import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonials:any;
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testimonials = this.getTestimonials();
    console.log(this.testimonials);
  }

  getTestimonials() {
    return this.config.getconfig().testimonials;
  }

}
