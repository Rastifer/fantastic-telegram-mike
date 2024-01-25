const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
    res.send('Hello World from Express.  I\'m Jacob and I\'m a type 2 personality in the Enneagram test')
})


app.get('/iss4', function (req, res) {
    res.send('Hello World from Jacob.  I\'m a type 2 personality in the Enneagram test')
})


// app.listen(3000)



// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Mike app listening on port ${port}`)
})