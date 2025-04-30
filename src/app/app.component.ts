import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesService } from './services/recipes.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlavorShare';
  constructor(private  RecipesService : RecipesService) { }
  ngOnInit() {
    this.RecipesService.getrecipe().subscribe((data: any) => {});
  };
  }
