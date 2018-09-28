import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

// Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
