// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.listen(3000)

const fs = require('fs')
const fileName = "target.txt"

const errHandler = (err) => console.log(err)
const dataHandler = (data) => console.log(data.toString())


const data = fs.readFileSync(fileName)
console.log(data.toString())

fs.readFile(fileName, (err, data)=> {
    if(err) {
        errHandler(err)
    } else {
        dataHandler(data)
    }
})

console.log("Node js async programming...")