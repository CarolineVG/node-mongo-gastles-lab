// require mongoose
const mongoose = require('mongoose');

// create schema
var Schema = mongoose.Schema;

// create layout (blueprint)
const studentSchema = new Schema({ 
    name: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

// create model of the blueprint
module.exports = mongoose.model('Student', studentSchema);