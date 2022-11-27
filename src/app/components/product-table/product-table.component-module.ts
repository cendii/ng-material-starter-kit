import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductTableComponent } from './product-table.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatListModule, MatTableModule, CommonModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
