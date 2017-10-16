import {
  autoinject
} from "aurelia-framework";
import {
  setUpFramework7
} from "./services/f7.js";

@autoinject
export class App {
  constructor(
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
    setUpFramework7();
  }
}
