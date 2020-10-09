const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "/bujur_sangkar" dengan method POST  
app.get("/fahrenheit/:fahrenheit", (req,res) => {  
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik  
    let fahrenheit = Number(req.params.fahrenheit)
    let result;

    let celsius = 5/9 * ( fahrenheit - 32 )
    let reamur = 4/9 * ( fahrenheit - 32 )
    let kelvin = 5/9 * ( fahrenheit - 32 ) + 273

    // membuat objek yang berisi data yang akan dijadikan response  
    let response = {  
        fahrenheit: fahrenheit,
        result: result={
        celsius: celsius,
        reamur: reamur,
        kelvin: kelvin
    }}  
  
    // memberikan response dengan format JSON yang berisi objek di atas  
    res.json(response)  
})  
  
