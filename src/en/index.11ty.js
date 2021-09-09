const Content = require('../content.js');

class EnglishContent extends Content {
  constructor() {
    super();
    this.language = 'en';
  }
}

module.exports = EnglishContent;
