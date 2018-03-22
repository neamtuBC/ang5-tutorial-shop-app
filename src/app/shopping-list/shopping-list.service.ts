import { IngredientMaterial } from '../shared/ingredientMaterial.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientMaterial[]>();
  private ingredients: IngredientMaterial[] = [
    new IngredientMaterial('Apples', 5),
    new IngredientMaterial('Tomato', 6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: IngredientMaterial){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientMaterial[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
