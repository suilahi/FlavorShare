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


}
