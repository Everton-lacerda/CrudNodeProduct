const mongoose = require('mongoose');
const mongoosePagiante = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        dafault: Date.now,
    },
});

ProductSchema.plugin(mongoosePagiante);

mongoose.model('Product', ProductSchema);