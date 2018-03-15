import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {

  @Input ('currentRecipe') recipe: Recipe;
  @Output ('selectedRecipe') selRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  clickRecipe(){
    this.selRecipe.emit(this.recipe);
  }

}
