const mongoose = require('mongoose');

const Movement = new mongoose.Schema({
    valor: {
       type: Number,
       required: [true, "Adicione um valor"]
    },

    data: {
        type: String,
        required: [true, "Adicione a data da transação"]
    },

    obs: {
        type: String,
        required: [false]
    },
    
    tipo: {
        type: String,
        required: [true, "Selecione o tipo"]
    }
});

module.exports = mongoose.model('Movements', Movement);