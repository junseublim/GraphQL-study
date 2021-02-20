# GraphQL-study
GraphQL study based on freeCodeCamp.org lecture https://www.youtube.com/watch?v=ed8SzALpx1Q

## How to run
```
$ cd client
$ npm install
$ npm build
$ cd ../server
$ npm install
$ node app 
```

### About

이 프로젝트는 GraphQL을 학습하기 위한 토이 프로젝트로, 유튜브 채널 freeCodeCamp.org에 올라온 영상을 기반으로 진행되었습니다. 클라이언트는 react, 서버는 express를 활용하였으며 데이터베이스는 mongoDB를 사용했습니다.

### DB
| Collection | Fields                                    |
|------------|-------------------------------------------|
| Author     | name: string, age: string,                |
| Book       | name: string, genre: string, authorId: ID |

### GraphQL Queries

1. Book 
```graphql
{
    book(id: "id") {
        name
        genre
        Author {
            name
            age
        }
    }
}
```
2. Author 
```graphql
{
    Author(id: "id") {
        name
        age
        books {
            name
            genre
        }
    }
}
```
2. addBook
```graphql
mutation {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        id
    }
}
```