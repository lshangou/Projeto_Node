const restful = require('node-restful')

const mongoose = restful.mongoose

const carroSchema = new mongoose.Schema({

  name: { type: String, required: true },

  color: { type: String, required: true },

  kilometers: { type: Number, min: 0, required: true },

  company: { type: String, required: true }

  })

module.exports = restful.model('Carro', carroSchema)