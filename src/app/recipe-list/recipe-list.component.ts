// recipes.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
selectedRecipe: any;

  constructor(private recipesService: RecipesService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.recipesService.recipelist().subscribe((data: any) => {
      this.recipes = data.meals; 
    });
  }

  showDetails(recipe: any): void {
    this.router.navigate(['/recipes', recipe.idMeal]);
  }
  
}
