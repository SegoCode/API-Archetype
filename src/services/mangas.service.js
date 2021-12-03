class mangaService {
  constructor() {
    this.id = 4432;
    this.titulo = 'Konosuba';
    this.precio = 12.99;
  }

  generate() {
    return this;
  }

  create(body) {
    return "hola";
  }

  find() {
    return this;
  }

  findById(id) {
    return this;
  }

  findByName(name) {
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
