import { IngredientMaterial } from '../shared/ingredientMaterial.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientMaterial[];

  constructor(name: string, desc: string, imagePath:string, ingredients:IngredientMaterial[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
