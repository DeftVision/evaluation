const mongoose = require("mongoose");
const schema = mongoose.Schema;

const evaluationSchema = new schema({
    visitDateTime: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    evaluator: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
    },
    cashier: {
        type: String,
        required: true,
    },
    greeting: {
        type: Boolean,
        required: false,
    },
    repeatOrder: {
        type: Boolean,
        required: false,
    },
    upsell: {
        type: Boolean,
        required: false,
    },
    patio: {
        type: Boolean,
        required: false,
    },
    wait: {
        type: Number,
        required: true,
    },
    foodScore: {
        type: Number,
        required: true,
    },
    cleanScore: {
        type: Number,
        required: true,
    },
    serviceScore: {
        type: Number,
        required: true,
    },
    calculateScore: {
        type: Number,
        required: false,
    },
    image: {
      type: String,
      required: true,
    },
    identifyManager: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },

}, {timestamps: true});

const evaluationModel = mongoose.model("CreateEvaluation", evaluationSchema);
module.exports = evaluationModel;