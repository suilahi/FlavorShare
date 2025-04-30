import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 
  constructor(private http:HttpClient) { }
    
  getrecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
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
