import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../footer/footer.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FooterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
