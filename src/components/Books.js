import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Book from './Book';

const base_url = "http://myapi-profstream.herokuapp.com/api/91f55d/books";

function Books(props) {
  let { path, url } = useRouteMatch();
  const [data, setData] = useState(null);
  async function getBooks() {
    try {
      const res = await axios.get(base_url);
      setData(res.data);
    } catch(e) {
      console.error(e);
    }
  }
  useEffect(() => {
      getBooks();
  }, [])

  return (
    <div>
      <h1>Books</h1>
      <ul>
        { data ? data.map(book => <li key={ book.id }><Link to={ `${url}/${book.id}` }>{ book.title }</Link></li>): "Loading..."}
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Choose a book in the list above</h3>
        </Route>
        <Route path={`${path}/:bookId`}>
          <Book />
        </Route>
      </Switch>
    </div>
  )
}

export default Books;