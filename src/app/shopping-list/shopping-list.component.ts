import { Component, OnInit } from '@angular/core';
import { IngredientMaterial } from '../shared/ingredientMaterial.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientMaterial[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientMaterial[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
