import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.blog = this.getblog();
    console.log(this.blog);
  }

  getblog() {
    return this.config.getconfig().blog;
  }

}
