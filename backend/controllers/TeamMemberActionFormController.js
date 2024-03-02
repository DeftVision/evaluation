const actionFormModel = require("../models/TeamMemberActionForm");
const bcrypt = require("bcrypt");


exports.getActionForms = async (req, res) => {
    try {
        const actionForms = actionFormModel.find({});
        if(!actionForms) {
            return res.send({
                message: "No team member action forms were found",
            })
        }
        return res.send({
            actionFormCount: actionForms.length,
            actionForms,
        })

    }   catch (error) {
        console.log(error);
        return res.send({
            message: "callback error.",
            error,
        })
    }
}

/*

exports.getActionForm = async (req, res) => {
    try {

    }   catch (error) {
        console.log(error);
        return res.send({
            message: "callback error.",
            error,
        })
    }
}


exports.newActionForm = async (req, res) => {
    try {

    }   catch (error) {
        console.log(error);
        return res.send({
            message: "callback error.",
            error,
        })
    }
}

exports.updateActionForm = async (req, res) => {
    try {

    }   catch (error) {
        console.log(error);
        return res.send({
            message: "callback error.",
            error,
        })
    }
}


exports.deleteActionForm = async (req, res) => {
    try {

    }   catch (error) {
        console.log(error);
        return res.send({
            message: "callback error.",
            error,
        })
    }
}
*/

