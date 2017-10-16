import {
  autoinject
} from "aurelia-framework";
import {
  PassService
} from "../../services/pass-service";
import { ISites } from './../../interfaces/sites';

@autoinject
export class NormalPage {
  constructor(
    private pass: PassService
  ){}
  
  seedList: ISites[];

  attached(){
    this.seedList = this.pass.getSeedList();
  }
}
