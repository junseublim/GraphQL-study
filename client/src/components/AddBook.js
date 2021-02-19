import React, { useEffect, useState } from 'react';
import {gql, useQuery, useMutation } from '@apollo/client';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries/queries';

const AddBook = ({props}) => {
    const {loading, error, data} = useQuery(getAuthorsQuery);
    const [addBook, {data2}] = useMutation(addBookMutation);

    const [bookInfo, setBookInfo] = useState({name: '', genre: '', authorId: ''});

    const displayAuthors = () => {
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option disabled>Error</option>;
        return data.authors.map(author => {
            return (
                <option key={author.id} value={author.id}>{author.name}</option>
            )
        })
    }

    const changeBookInfo = (e) => {
        setBookInfo({...bookInfo, [e.target.name] : e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(bookInfo);
        addBook({variables: {
            name: bookInfo.name,
            genre: bookInfo.genre,
            authorId: bookInfo.authorId
        },
        refetchQueries: [{query: getBooksQuery}]
        });
        setBookInfo({});
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <div className="field">
                <label>Book Name: </label>
                <input type="text" name="name" onChange={e => changeBookInfo(e)}></input>
            </div>
            <div className="field">
                <label>Genre: </label>
                <input type="text" name="genre" onChange={e => changeBookInfo(e)}></input>
            </div>
            <div className="field">
                <label>Author: </label>
                <select name="authorId" onChange={e => changeBookInfo(e)}>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    )
}

export default AddBook;