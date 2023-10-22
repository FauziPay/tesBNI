import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/json-placeholder.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  guides: any[] = [];
  
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit() {
    this.jsonPlaceholderService.getGuides().subscribe(data => {
      this.guides = data;
    });
  }

}
