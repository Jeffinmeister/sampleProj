import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.posts = this.getblog();
  }

  getblog() {
    return this.config.getconfig().blog;
  }

}
