import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { IngredientMaterial } from '../shared/ingredientMaterial.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLRq8bCNZ8Z42MW1cQA3z2PZVWEqRdK_zKtF_zTK5Knb4Y9au',
      [
        new IngredientMaterial('Carne',1),
        new IngredientMaterial('Pita',2)
      ]),
    new Recipe(
      'Another recipe',
      'This is the second recipe.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUo-cpxBu9iTD0yiN0SWteXeaB5eWNM-YEFN8Csbkaf98xVBLwaQ',
      [
        new IngredientMaterial('Salata',3),
        new IngredientMaterial('Varza',4)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is a copy of first recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkLRq8bCNZ8Z42MW1cQA3z2PZVWEqRdK_zKtF_zTK5Knb4Y9au',
      [
        new IngredientMaterial('Rosii',3),
        new IngredientMaterial('Castraveti',2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: IngredientMaterial[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
