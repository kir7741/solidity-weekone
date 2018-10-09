import { Component } from '@angular/core';

// Constants
import { appRoutePath } from './app-route-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routePath = appRoutePath;
  title = 'app';
}
