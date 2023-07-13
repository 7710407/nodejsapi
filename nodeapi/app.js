const express = require('express')
const app = express()
const morgan = require("morgan");
const { getPosts } = require("./routes/post")

const myOwnMiddleware = (req, res, next) => {
    console.log('my middleware')
    next()
}
app.use(morgan('dev'))
app.use(myOwnMiddleware)

app.get("/", getPosts)

app.listen(3000, () => {console.log(`11111111111111`)})