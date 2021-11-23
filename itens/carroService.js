const Carro = require('./carro');
Carro.methods(['get', 'post', 'put', 'delete']);
Carro.updateOptions({new: true, runValidators: true});
module.exports = Carro