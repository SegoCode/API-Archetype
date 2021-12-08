class mangaService {
  constructor() {
    this.id = 4432;
    this.titulo = 'Konosuba';
    this.precio = 12.99;
  }

  find() {
    setTimeout(function () {
      console.log('DB delay');
    }, 3000);

    return this;
  }

  create(body) {
    return this;
  }

  update(body) {
    return this;
  }

  delete(id) {
    return this;
  }
}

module.exports = mangaService;
