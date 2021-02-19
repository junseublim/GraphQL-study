const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://junslim11:password11@cluster0.zm7zm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to db');
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
})