import { IngredientMaterial } from '../shared/ingredientMaterial.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientMaterial[]>();
  startedEditing = new Subject<number>();

  private ingredients: IngredientMaterial[] = [
    new IngredientMaterial('Apples', 5),
    new IngredientMaterial('Tomato', 6)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IngredientMaterial){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientMaterial[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: IngredientMaterial) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
