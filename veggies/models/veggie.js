const{ Schema, model} = require('mongoose')
const veggiesSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Veggie = model('Veggie', veggiesSchema);

module.exports = Veggie