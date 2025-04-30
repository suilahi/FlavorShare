import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 
  constructor(private http:HttpClient) { }
    
  recipelist() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    return this.http.get(url);
  }
  recipeDetail(id: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get(url);
  }
  getRecipeById(id: string) {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  } 
}
