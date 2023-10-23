import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/json-placeholder.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  posts: any[] = [];
  loading: boolean = true;
  
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(){
    this.jsonPlaceholderService.getPosts().subscribe(data => {
      this.posts = data;
      this.loading = false;
    });
  }

  getByIdUpdate(id: any){
    this.jsonPlaceholderService.getPostsById(id).subscribe(data => {
      console.log(data, "getById");
    });
  }

  deletePost(id: any){
    this.jsonPlaceholderService.deletePosts(id).subscribe(data => {
      console.log(data, "deleteById");
      this.getAllPost();
    });
  }

}
