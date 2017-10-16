import {
  autoinject
} from "aurelia-framework";
import {
  F7
} from "./services/f7";

@autoinject
export class App {
  constructor(
    public F7: F7
  ) {
    this.views = [{
      name: 'index',
      navTitle: 'Home',
      moduleId: './pages/index/index',
      nav: true,
      homepage: true
    }, {
      name: 'site-list',
      navTitle: 'Site List',
      moduleId: './pages/normal-page/normal-page',
      nav: true
    }]
  }
  views = [];
  attached() {
    this.F7.setUpFramework7();
  }
}
