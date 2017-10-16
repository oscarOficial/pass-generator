/* eslint-disable no-undef */
import 'aurelia-bootstrapper-webpack'

export function configure(aurelia) {
  aurelia.use
    .basicConfiguration()
    .developmentLogging()

  aurelia.start().then(() => {
    setTimeout(() => {
      aurelia.setRoot('app', document.body)
    }, 1000)
  })
}
