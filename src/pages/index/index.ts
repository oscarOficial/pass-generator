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
  @bindable isPasswordMasked: boolean = true;

  setValues() {
    this.passService.setVals(this.passService.mainPassword);
  }
}
