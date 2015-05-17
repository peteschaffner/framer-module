
var Webview = require('framer-webview')

module.exports = class RainbowWebview extends Webview {
  constructor(opts={}) {
    super(opts);

    this.style.background = `linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
      )`;
  }
}
