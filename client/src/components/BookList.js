import React, { useEffect } from 'react';
import {gql, useQuery } from '@apollo/client';
import {getBooksQuery} from '../queries/queries';

const BookList = ({props}) => {
    const {loading, error, data} = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    return (
        <div>
            <ul id="book-list">
                {
                    data.books.map(book => {
                        return (
                            <li key={book.id}>{book.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BookList;