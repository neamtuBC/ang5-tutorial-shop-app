import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLRq8bCNZ8Z42MW1cQA3z2PZVWEqRdK_zKtF_zTK5Knb4Y9au'),
    new Recipe('Another recipe', 'This is the second recipe.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUo-cpxBu9iTD0yiN0SWteXeaB5eWNM-YEFN8Csbkaf98xVBLwaQ'),
    new Recipe('Another Test Recipe', 'This is a copy of first recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLRq8bCNZ8Z42MW1cQA3z2PZVWEqRdK_zKtF_zTK5Knb4Y9au')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
