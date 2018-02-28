import { PassService } from './services/pass-service';
import {
  autoinject
} from "aurelia-framework";
import {
  F7
} from "./services/f7";

@autoinject
export class App {
  constructor(
    public F7: F7,
    private pass: PassService
  ) {
    this.views = [{
      name: 'index',
      navTitle: 'Home',
      moduleId: './pages/index/index',
      nav: true,
      homepage: true
    }, {
      name: 'pass-list',
      navTitle: 'Site Password List',
      moduleId: './pages/pass-page/pass-page',
      nav: true
    }, {
      name: 'site-list-edit',
      navTitle: 'Sites Edit',
      moduleId: './pages/edit-page/edit-page',
      nav: true
    }];
  }
  views = [];
  attached() {
    this.F7.setUpFramework7();
  }
  reload(){
    this.pass.reloadSeedList();
  }
  save(){
    this.pass.saveSeedList();
  }
}
