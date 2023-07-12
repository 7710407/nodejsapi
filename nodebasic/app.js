const { sum } = require('./helpers')
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello world from node js 111")
})

server.listen(3000);

console.log('hello from node js')
console.log(process)

const total = sum(3, 2)
console.log("TOTAL: ", total)