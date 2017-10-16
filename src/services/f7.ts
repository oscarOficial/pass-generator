/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import 'framework7/dist/css/framework7.material.css'
import 'framework7/dist/css/framework7.material.colors.css'
import 'framework7/dist/js/framework7.js';

// Framework7 Setup to be called by app.js when DOM is ready
declare var Framework7: any

export class F7 {
  constructor() { }
  mainView;
  myApp;
  setUpFramework7 = function () {
    this.myApp = new Framework7({
      material: true,
      animateNavBackIcon: true
    });

    this.mainView = this.myApp.addView('.view-main', {
      domCache: true // enable inline pages
    });
  }
}