import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    useParams
} from "react-router-dom";

const base_url = "http://myapi-profstream.herokuapp.com/api/91f55d/books";

function BookDetails(props) {
    return (
        <div>
            <h1>Book title: { props.book.title }</h1>
            <p>This book was written by { props.book.author } and released in the year of "{ props.book.release_date }"</p>
        </div>
    )
}

function Book() {
    let { bookId } = useParams();
    const [data, setData] = useState(null);
    async function getBook() {
        try {
            const res = await axios.get(`${base_url}/${bookId}`);
            setData(res.data);
        } catch(e) {
            console.error(e);
        }
    }
    useEffect(() => {
        getBook();
    })
    return(
        <div>
            { data ? <BookDetails book={ data } /> : "Retrieving book details..." }
        </div>
    )
}

export default Book;