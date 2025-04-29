import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatComponent } from './plat/plat.component';

export const routes: Routes = [

    {path: '',
         component: HomeComponent
        },
        {path: 'home',
            component: HomeComponent
        },
        {path:'plat'
            ,component: PlatComponent
        }


];
