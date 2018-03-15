import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 6)
  ];

  addIngredient(ingredient:{name: string, amount: number}){
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
  }

  constructor() { }

  ngOnInit() {
  }

}
