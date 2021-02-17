const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql;

//dummydata

var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'Name of the Fire', genre: 'Fantasy', id: '2'},
    {name: 'Name of the Earth', genre: 'Fantasy', id: '3'},

]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                //code to get data from db/ other source
                return _.find(books, {id: args.id});
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery
})