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
app.post("/bmi", (req,res) => {  
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik  
    let berat = Number(req.body.berat) // mengambil nilai panjang dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body
    tinggi /=100;
    
    let hasil = berat/(tinggi*tinggi)
    let status = hasil

    if(hasil <= 18.5){
        status ="kekurangan berat badan";
    } else if(hasil >= 18.5 && hasil <= 24.9){
        status ="Normal (ideal)"
    } else if(hasil >= 25 && hasil <= 29.9){
        status ="Kelebihan Berat Badan"
    } else{
        status ="Kegemukan (Obesitas)"
    }

    // membuat objek yang berisi data yang akan dijadikan response  
    let response = {  
        berat: berat,
        tinggi: tinggi,
        hasil: hasil,
        status: status
    }  
  
    // memberikan response dengan format JSON yang berisi objek di atas  
    res.json(response)  
})  
  