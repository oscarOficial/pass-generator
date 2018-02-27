import { F7 } from './../../services/f7';
import {
  autoinject
} from "aurelia-framework";
import {
  PassService
} from "../../services/pass-service";

var mainView: any;

@autoinject
export class LeftPanel {
  constructor(
    private pass: PassService,
    private f7: F7
  ){}

  navigateToView(event: Event, idView: string){
    // if(this.pass.mainPassword == void 0){
    //   event.preventDefault();
    //   return;
    // }
    
    this.f7.mainView.router.load({pageName: idView});
  }
}
