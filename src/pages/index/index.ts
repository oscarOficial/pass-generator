/* eslint-disable no-undef */
import {
  autoinject,
  bindable
} from "aurelia-framework";

var PLATFORM: string;
var PRODUCTION: string;
@autoinject
export class Index {
  private platform: string;
  private enviromment: string;

  constructor() {
    this.platform = PLATFORM
    this.enviromment = PRODUCTION ? 'production' : 'development'
  }

  @bindable mainPassword: string;
  @bindable isPasswordMasked: boolean = true;

  showPasswords(event) {
    return;
    // event.preventDefault();

    // this.F7.mainView.router.load({pageName: 'pass-lis'});
    // this.setMainPassword();
  }
  setMainPassword() {
    return;
    // this.pass.setVals(this.pass.mainPassword);

    // this.pass.reloadSeedList();
  }
}
