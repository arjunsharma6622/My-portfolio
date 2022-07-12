const router = require("express").Router()
const Project = require("../model/Project")

router.get("/projects_data", async (req, res) => {
    const projects = await Project.find()
    try{
        res.status(200).json(projects)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.post("/register", async (req, res) => {

    const newProject = new Project({

        title : req.body.title,
        img_url : req.body.img_url,
        tech_stack : req.body.tech_stack,
        desc : req.body.desc,
        git_link : req.body.git_link,
        demo_link : req.body.demo_link,
    })

    try{
        const project = await newProject.save()
        res.status(200).json(project)
    }
    catch(err){
        res.status(500).json(err)
    }
}) 



router.delete("/delete_projects", async (req, res) => {
    try{
        await Project.deleteMany()
        res.status(200).json("The Projects have been deleted successfully")
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router