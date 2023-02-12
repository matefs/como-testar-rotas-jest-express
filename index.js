const app = require('./server.js')
const port = 3000;

app.listen(port,() => {
    console.log('Example app listennig at http://localhost:'+port)
})


