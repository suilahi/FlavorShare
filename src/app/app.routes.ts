import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [

    {path: '',
         component: HomeComponent
        },
        {path: 'home',
            component: HomeComponent
        },
        {path: 'recipe-list',
            component: RecipeListComponent
        },
        
        {path: 'recipe-detail',
            component: RecipeDetailComponent
        }

];
