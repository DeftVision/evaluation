const mongoose = require("mongoose");
const schema = mongoose.Schema;


const fileSchema = new schema({
    category: {
        type: String,
        required: true,
    },
    uploadFile: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    display: {
        type: Boolean,
        required: false,
    }
},
    {timestamps: true})

const fileModel = mongoose.model("File", fileSchema);
module.exports = fileModel;

