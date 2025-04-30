import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;  // Variable pour stocker la recette

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.recipesService.getRecipeById(id).subscribe((data: any) => {
          const r = data.meals[0];
          
          this.recipe = {
            name: r.strMeal,
            instructions: r.strInstructions,
            ingredients: this.extractIngredients(r) 
          };
        });
      }
    });
  }

  extractIngredients(recipe: any): string[] {
    const ingredients: string[] = [];
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure ? measure : ''} ${ingredient}`.trim());
      }
    }
    
    return ingredients;
  }
}
