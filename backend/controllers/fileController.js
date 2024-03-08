const fileModel = require("../models/fileModel");


exports.getFiles = async (req, res) => {
    try {
        const { category, uploadFile, description, display} = req.body;
        const files = await fileModel.find({});
        if(!files) {
            return res.send({
                message: "no files were found",
            })
        }
        if(files) {
            return res.send({
                file: files.length,
                files,
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting all files callback error",
            error,
        })
    }
}


exports.uploadFile = async (req, res) => {
    try {
        const { category, uploadFile, description, display } = req.body;
        if(!category || !uploadFile || !description  ) {
            return res.send({
                message: "All fields are required",
            })
        }

        const file = new fileModel({category, uploadFile, description, display});
            await file.save();
        return res.send({
            message: "file was uploaded successfully.",
            file,
        })

    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "uploading file callback error.",
            error,
        })
    }
}


exports.getFile = async (req, res) => {
    try {
        const { id } = req.params;
        const file = await fileModel.findById(id);
        if(!file) {
            return res.send({
                message: "file was not found.",
            })
        }
        if(file) {
            return res.send({
                file,
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "getting a file callback error",
            error,
        })
    }
}


exports.deleteFile = async (req, res) => {
    try{
        const { id } = req.params;
        const file = await fileModel.findByIdAndDelete(id);
        if(file) {
            return res.send({
                message: "file was deleted",
                file,
            })
        }
    }
    catch (error) {
        console.log(error);
        return res.send({
            message: "deleting a file callback error.",
            error,
        })
    }
}


