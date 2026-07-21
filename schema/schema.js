const {GraphQLSchema , GraphQLObjectType , GraphQLString, GraphQLInt} = require('graphql')

const userType = new GraphQLObjectType({
    name : "User",
    fields : {
        id : {type : GraphQLString},
        name : {type : GraphQLString},
        age : {type : GraphQLInt},
    }
})

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        user:{
            type : userType,
            args : {id:{type : GraphQLString}},
            resolve(parent,args){
                const users = [
                    {id:'1', name:"soumay",age:"24"},
                    {id:'2', name:"mayu",age:"25"}
                ]

                return users.find(user => user.id === args.id)
            }
        },
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