const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    repository: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    }
});


module.exports = model('Project', ProjectSchema);