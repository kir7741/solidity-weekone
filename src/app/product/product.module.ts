import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../footer/footer.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
