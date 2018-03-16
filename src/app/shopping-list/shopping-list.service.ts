import { EventEmitter } from '@angular/core';
import { IngredientMaterial } from '../shared/ingredientMaterial.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<IngredientMaterial[]>();
  private ingredients: IngredientMaterial[] = [
    new IngredientMaterial('Apples', 5),
    new IngredientMaterial('Tomato', 6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientMaterial){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
