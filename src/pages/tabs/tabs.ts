import { Component } from '@angular/core';

import { MoviesPage } from '../movies/movies';
import { FlashlightPage } from '../flashlight/flashlight';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MoviesPage;
  tab3Root = FlashlightPage;

  constructor() {

  }
}
