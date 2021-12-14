const Joi = require('joi');

const id = Joi.string().uuid();
const titulo = Joi.string().min(3).max(15);
const precio = Joi.number().integer().min(10);

const createMangaSchema = Joi.object({
	titulo: titulo.required(),
	precio: precio.required(),
});

const updateMangaSchema = Joi.object({
	titulo: titulo,
	precio: precio,
});

const deleteMangaSchema = Joi.object({
	id: id.required(),
});

module.exports = { createMangaSchema, updateMangaSchema, deleteMangaSchema };
