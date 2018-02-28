import { autoinject } from 'aurelia-framework';
import { PassService } from './../../services/pass-service';
import { ISites } from '../../interfaces/export';

@autoinject
export class EditPage {
  constructor(
    private pass: PassService
  ) { }

  currentSite: ISites = { displayName: "", seed: "", url: "" };

  addSite() {
    this.currentSite.seed = this.currentSite.displayName.toLocaleLowerCase();

    const toAdd = Object.assign({}, this.currentSite);
    this.pass.currentSeedList.push(toAdd);

    this.resetCurrentSite();
  }
  
  deleteSite(site: ISites) {
    this.pass.currentSeedList.slice(this.pass.currentSeedList.indexOf(site), 1);
  }

  private resetCurrentSite() {
    this.currentSite.displayName = "";
    this.currentSite.seed = "";
    this.currentSite.url = "";
  }
}