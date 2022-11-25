import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesMenuComponent } from './categories-menu.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
    imports: [MatButtonModule, MatMenuModule, CommonModule, MatListModule],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
