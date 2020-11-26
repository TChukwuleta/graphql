const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = 4002

//Allow cross origin request
app.use(cors())

URI = 'mongodb+srv://TChukwuleta:Iamgreat97@cluster1.ejith.mongodb.net/gqltwo?retryWrites=true&w=majority'
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected successfully')
})
.catch((err) => {
    console.log(err)
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})