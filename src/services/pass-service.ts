import {
  autoinject,
  bindable
} from "aurelia-framework";
import {
  PasswordGenerator
} from './pass-generator';
import {
  ISites
} from "../interfaces/export";

@autoinject
export class PassService {
  private _localStorageName: string = "pass_seed_list";
  constructor(
    private passgen: PasswordGenerator
  ) { }
  private defaultSeedList: Array<ISites> = [
    { seed: "amazon", url: "https://www.amazon.com/", displayName: "Amazon" }
    , { seed: "apple", url: "https://www.apple.com/", displayName: "Apple" }
    , { seed: "box", url: "https://app.box.com/login/", displayName: "Box" }
    , { seed: "ebay", url: "https://signin.ebay.com/", displayName: "Ebay" }
    , { seed: "facebook", url: "https://www.facebook.com/", displayName: "Facebook" }
    , { seed: "google", url: "https://www.google.com/", displayName: "Google" }
    , { seed: "linkedin", url: "https://www.linkedin.com/", displayName: "LinkedIn" }
    , { seed: "nytimes", url: "https://myaccount.nytimes.com/", displayName: "NYTimes" }
    , { seed: "outlook", url: "https://www.outlook.com/", displayName: "Outlook" }
    , { seed: "paypal", url: "https://www.paypal.com/", displayName: "PayPal" }
    , { seed: "tumblr", url: "https://www.tumblr.com/", displayName: "Tumblr" }
    , { seed: "twitter", url: "https://twitter.com/", displayName: "Twitter" }
    , { seed: "wikipedia", url: "https://www.wikipedia.org/", displayName: "Wikipedia" }
    , { seed: "wordpress", url: "https://www.wordpress.com/", displayName: "WordPress" }
    , { seed: "yahoo", url: "https://login.yahoo.com/", displayName: "Yahoo" }
  ];

  @bindable mainPassword: string;

  currentSeedList: Array<ISites>;

  getSeedList(): Array<ISites> {
    const customSeeds = localStorage.getItem(this._localStorageName);

    this.currentSeedList = customSeeds
      ? JSON.parse(customSeeds)
      : this.defaultSeedList;

    return this.currentSeedList;
  }

  saveSeedList() {
    if (this.currentSeedList && this.currentSeedList.length) {
      localStorage.setItem(this._localStorageName, JSON.stringify(this.currentSeedList));
    }
  }

  setVals(myPassword) {
    if (!myPassword) {
      return;
    }
    for (var i = 0; i < this.currentSeedList.length; i++) {
      this.passwordHash(this.currentSeedList[i].seed, myPassword);
    }
  }
  reloadSeedList() {
    //TODO
  }

  private passwordHash(passbox, master) {
    var newpass = this.passgen.b64_sha1(master + ':' + passbox);
    newpass = newpass.substr(0, 8) + '1a' || "";

    document.getElementById(passbox).setAttribute('value', newpass);
  }
}