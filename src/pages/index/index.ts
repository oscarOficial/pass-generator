/* eslint-disable no-undef */
import {
  autoinject,
  bindable,
  observable
} from "aurelia-framework";
import { PassService } from './../../services/pass-service';

var PLATFORM: string;
var PRODUCTION: string;
@autoinject
export class Index {
  private platform: string;
  private enviromment: string;

  constructor(
    private passService: PassService
  ) {
    this.platform = PLATFORM
    this.enviromment = PRODUCTION ? 'production' : 'development'
  }

  @bindable mainPassword: string;

  setValues() {
    console.log("mainPass: " + this.mainPassword);
    this.passService.setVals(this.mainPassword);
  }
}
