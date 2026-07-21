const express = require('express'); // for server
const {graphqlHTTP} = require('express-graphql'); // for connect server to graphql
const schema = require('./schema/schema.js'); // to write schema to show the data from db 

const app = express();

app.use("/graphql-me",graphqlHTTP({
    schema,
    graphiql: true, // for showing ui on the port to write and run query 
}))

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})