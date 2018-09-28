import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route, PreloadAllModules } from '@angular/router';

// Component
import { HomeComponent } from './home/home.component';

// Constants
import { appRoutePath } from './app-route-path.const';

const homeRoute: Route = {
  path: appRoutePath.home,
  component: HomeComponent
};

const defaultRoute: Route = {
  path: '',
  redirectTo: appRoutePath.home,
  pathMatch: 'full'
};

const routes: Routes = [
  homeRoute,
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
