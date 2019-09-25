import { Injectable } from '@angular/core';
import { HomeModel } from '../models/homeModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getHomeContent():Observable<HomeModel>{
    return of(homeContent);    
  }
}


const homeContent: HomeModel={
  mainImageUrl:'/assets/images/bg-home.jpg',
  image2Url:'/assets/images/yogurt.jpg',
  header:'The Twist of Healthy Yogurt',
  description: 'New range of tasty healthy youghurt have been introduced to the market on this month.Tryout the new line of healthy yogurt and you will love the taste'
}