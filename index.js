const app = require('express')()

app.get('/', (req, res) => {
    res.send('Hi')
})

app.listen(3000, () => {
    console.log("Server started listening on: ", 3000);
})