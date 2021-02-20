import React from 'react';
import {getBookQuery} from '../queries/queries';
import { useQuery } from '@apollo/client';


const BookDetails = ({bookId}) => {
    const {loading, error, data} = useQuery(getBookQuery, {
        variables: {id: bookId},
    });
    if (bookId === undefined) return <></>;
    if (loading) return <p>loading...</p>;
    if (error) return <p>Error!</p>;

    const displayBookDetails = () => {
        const book = data.book;
        return (
            <div>
                <h2>{book.name}</h2>
                <p>{book.genre}</p>
                <p>{book.author.name}</p>
                <p>All books by this author:</p>
                <ul className="other-books">
                    {
                        book.author.books.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    return (
        <div id="book-details">
            {
                displayBookDetails()
            }
        </div>
    );
};

export default BookDetails;