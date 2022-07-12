const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    "title" : {type : String},
    "img_url" : {type : String},
    "tech_stack" : {type : String},
    "desc" : {type : String},
    "git_link" : {type : String},
    "demo_link" : {type : String},
})


module.exports = mongoose.model("Project", ProjectSchema)