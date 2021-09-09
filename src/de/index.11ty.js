const Content = require('../content.js');

class GermanContent extends Content {
  constructor() {
    super();
    this.language = 'de';
  }
}

module.exports = GermanContent;
