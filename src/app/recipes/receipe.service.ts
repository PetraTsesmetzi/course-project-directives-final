import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_1280.jpg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_1280.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}