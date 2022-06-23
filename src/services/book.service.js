class bookService {
	constructor() {
		this.id = 4432;
		this.titulo = 'How to make api rest full';
		this.precio = 12.99;
	}

	async find() {
		return this;
	}

	async create(body) {
		return this;
	}

	async update(body) {
		return this;
	}

	async delete(id) {
		return this;
	}
}

module.exports = bookService;
