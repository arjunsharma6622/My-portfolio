const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cors = require("cors")

dotenv.config()

//Variables
const PORT = process.env.PORT || 8000
const mongoDBUrl = process.env.mongoDBUrl

//middlewares
app.use(cors())
app.use(bodyParser.json())

//routes
const ProjectRoutes = require("./routes/ProjectRoutes")
app.use("/api/project", ProjectRoutes)



//connecting to Database
mongoose.connect(mongoDBUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {console.log("DB connected")})
.catch((err) => {`DB Error : ${err}`})


//listening to the server
app.listen(PORT , (req, res) => {
    console.log(`The server is running on PORT ${PORT}`)
})