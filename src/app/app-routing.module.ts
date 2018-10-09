import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route, PreloadAllModules } from '@angular/router';

// Component
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

// Constants
import { appRoutePath } from './app-route-path.const';

const homeRoute: Route = {
  path: appRoutePath.home,
  component: HomeComponent
};

const productRoute: Route = {
  path: appRoutePath.product,
  component: ProductComponent
};

const defaultRoute: Route = {
  path: '',
  redirectTo: appRoutePath.home,
  pathMatch: 'full'
};

const routes: Routes = [
  homeRoute,
  productRoute,
  defaultRoute
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
