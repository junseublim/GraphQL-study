import React, { useEffect, useState } from 'react';
import {gql, useQuery } from '@apollo/client';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = ({props}) => {
    const {loading, error, data} = useQuery(getBooksQuery);
    const [bookId, setBookId] = useState();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;


    return (
        <div>
            <ul id="book-list">
                {
                    data.books.map(book => {
                        return (
                            <li onClick={() => setBookId(book.id)} key={book.id}>{book.name}</li>
                        )
                    })
                }
            </ul>
            <BookDetails bookId={bookId}/>
        </div>
    )
}

export default BookList;