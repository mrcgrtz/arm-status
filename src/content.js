const status = require('./status.js');

class Main {
  constructor() {
    this.status = status;
  }

  get data() {
    if (this.language) {
      const translations = require(`./${this.language}/translations.json`);
      const [extension, normal, flexion] = this.status.split('-').map(Number);
      const degrees = extension + flexion - normal;
      const text = translations.text.replace('{{ degrees }}', degrees);
      const rotation = [extension + normal, flexion, extension + normal]
        .map((direction) => `-${direction} ${55 + direction / 30} 285`)
        .flatMap((item) => [item, item])
        .join(';');
      return {
        ...translations,
        layout: 'layout',
        lang: this.language,
        value: this.status,
        rotation,
        text,
        degrees,
        degreesMin: 0,
        degreesMax: 150,
        permalink: (data) =>
          `/index${data.lang === 'en' ? '' : '.' + data.lang}.html`,
      };
    }

    return null;
  }

  render() {
    return null;
  }
}

module.exports = Main;
