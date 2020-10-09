const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})

app.get("/hex/:hex", (req,res) => {  
    let hex = Number(req.params.hex)

    let desimal = hex.toString(10)
    let biner = hex.toString(2)
    let oktal = hex.toString(8)

    let response = {  
        hex: hex,
        desimal: desimal,
        biner: biner,
        oktal: oktal,

        
    }  
      res.json(response)  
})  
  