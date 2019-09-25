import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/homeModel';
import { ContentService } from 'src/app/Services/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeModel:HomeModel;

  constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.contentService.getHomeContent().subscribe(content=>this.homeModel=content);
  }

}
