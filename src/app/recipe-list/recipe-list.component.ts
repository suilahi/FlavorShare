import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  http: any;
  recipes: any;
  constructor(http: HttpClient) { } 
  recipelist() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
    this.http.get(url)
    
  }
}