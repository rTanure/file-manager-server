const mongoose = require("mongoose")
const { boolean } = require("zod")

const textFileSchema = new mongoose.Schema({
    title: {type: String, require: true, minLength: 3, maxLength: 200},

    path: {type: String, require: true, minLength: 3, maxLength: 200},
    fileState: {type: boolean, default: true}
  },{
    timestamps: true
  }

)

const textFileModel = mongoose.model("TextFile", textFileSchema)

module.exports = textFileModel