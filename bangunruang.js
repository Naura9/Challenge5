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

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

// end-point "/bujur_sangkar" dengan method POST  
app.post("/rumus_kerucut", (req,res) => {  
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik  
    let jarijari = Number(req.body.jarijari) // mengambil nilai panjang dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body
    let phi = 3.14

    let luasAlas = phi * jarijari * jarijari
    let luasSelimut = 2 * phi * jarijari * tinggi

    let volume = 1/3 * phi * jarijari * jarijari * tinggi
    let luasPermukaan = luasAlas + luasSelimut
  
    // membuat objek yang berisi data yang akan dijadikan response  
    let response = {  
        jarijari: jarijari,
        tinggi: tinggi,
        phi: 3.14,
        volume: volume,  
        luasPermukaan: luasPermukaan  
    }  
  
    // memberikan response dengan format JSON yang berisi objek di atas  
    res.json(response)  
})  
  