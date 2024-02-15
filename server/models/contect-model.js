const {Schema, model, default: mongoose, Collection } = require("mongoose");

const contactSchema = new Schema({
    username: {type: String, require:true },
    email: {type: String, require:true },
    message: {type: String, require:true },

});

// create a model or Collection
const Contact = new model('Contect', contactSchema);

module.exports = Contact;
