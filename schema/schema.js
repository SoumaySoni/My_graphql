const {GraphQLSchema , GraphQLObjectType , GraphQLString, GraphQLInt} = require('graphql')

const userType = new GraphQLObjectType({
    name : "User",
    fields : {
        id : {type : GraphQLString},
        name : {type : GraphQLString},
        age : {type : GraphQLInt},
    }
})

const users = [{id:'1', name:"soumay",age:24},{id:'2', name:"mayu",age:25}]

// mutattion
const addUser = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type : userType,
            args: {name:{type: GraphQLString },age :{type: GraphQLInt}},
            resolve(parent, args){
                const user = {
                    id : users.length + 1 +"",
                    name : args.name,
                    age : args.age
                }
                users.push(user)
                return user
            }
             
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name : "RootQueryType",
    fields : {
        user:{
            type : userType,
            args : {id:{type : GraphQLString}},
            resolve(parent,args){
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
    query:RootQuery,
    mutation: addUser
});