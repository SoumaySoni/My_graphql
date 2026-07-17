const {GraphQLSchema , GraphQLObjectType , GraphQLString} = require('graphql')

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        hello:{
            type: GraphQLString,
            resolve(){
                return("hello there")
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
});