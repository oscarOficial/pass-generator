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
  ) { }

  seedList: ISites[];
  currentSite: ISites = { displayName: "", seed: "", url: "" };

  bind() {
    this.seedList = this.pass.getSeedList();
  }

  addSite() {
    this.currentSite.seed = this.currentSite.displayName.toLocaleLowerCase();
    
    const toAdd = Object.assign({}, this.currentSite);
    this.seedList.push(toAdd);
    
    this.pass.currentSeedList = this.seedList;
    
    this.resetCurrentSite();
  }
  deleteSite(site: ISites) {
    this.seedList.splice(this.seedList.indexOf(site), 1);

    this.pass.currentSeedList = this.seedList;
  }

  private resetCurrentSite() {
    this.currentSite.displayName = "";
    this.currentSite.seed = "";
    this.currentSite.url = "";
  }
}
