import { F7 } from './../../services/f7';
import {
  autoinject,
  bindable,
  bindingMode
} from "aurelia-framework";
import {
  PasswordGenerator
} from "../../services/pass-generator"
import { ISites } from './../../interfaces/export';

@autoinject
export class PasswordInput {
  constructor(
    private passwordGenerator: PasswordGenerator,
    private f7: F7
  ) { }

  @bindable site: ISites;

  generatedPass: string

  goToUrl(site: ISites) {
    this.copyPassToClipBoard(site);
  }

  private copyPassToClipBoard(site: ISites) {
    const inputElement = document.getElementById(site.seed) as HTMLInputElement;
    if (inputElement == void 0) {
      return;
    }
    inputElement.select();

    const successs = document.execCommand("copy");

    if (successs) {
      this.f7.myApp.addNotification({
        title: "Password Copied",
        message: "We are redirecting to the Web so you can paste the generated password.",
        hold: 1200,
        onClose: () => {
          window.open(site.url, "_blank");
        }
      });
    } else {

      this.f7.myApp.addNotification({
        title: "Error",
        message: "There was some error.",
        hold: 1200
      });
    }
  }
}