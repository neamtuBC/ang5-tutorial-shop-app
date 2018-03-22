import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { IngredientMaterial } from '../shared/ingredientMaterial.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngredientMaterial[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientMaterial[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
