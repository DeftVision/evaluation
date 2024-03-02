const mongoose = require("mongoose");
const schema = mongoose.Schema;

const actionFormSchema = new schema({
    teamMemberId: {
        type: String,
        required: true,
    },
    formType: {
        type: Boolean,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    initial: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    effectiveDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    sex: {
        type: Boolean,
        required: true,
    },
    ssn: {
        type: String,
        required: true,
    },
    employmentEligibility: {
        type: String,
        required: true,
    },
    taxInfo: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    w2: {
        type: Boolean,
        required: true,
    },
    w2Email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    permanent: {
        type: String,
        required: true,
    },
    icsName: {
        type: String,
        required: true,
    },
    icsPhone: {
        type: String,
        required: true,
    },
    icsRelationship: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true,
    },
    approval: {
        type: String,
        required: true,
    },
    gmSign: {
        type: String,
        required: true,
    },
    island: {
        type: String,
        required: true,
    },
    gmSignDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    dmSign: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    dmSignDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },

})

const actionFormModel = mongoose.model("ActionForm", actionFormSchema) ;
module.exports = actionFormModel;