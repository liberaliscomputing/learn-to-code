import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


const LogIn = ({ username }) => {
  return (
    <div>{`Hello, ${username}!`}</div>
  );
};

const Book = ({ book }) => {
  const { author, title, year } = book;
  return (
    <tr>
      <td>{author}</td>
      <td>{title}</td>
      <td>{year}</td>
    </tr>
  );
};

const Books = ({ books }) => {
  return (
    <table>
      <thead>
        <td>Author</td>
        <td>Title</td>
        <td>Year</td>
      </thead>
      <tbody>
        {books.map(book => <Book book={book} />)}
      </tbody>
    </table>
  );
};

const Collection = ({ data }) => {
  const { username, books } = data;
  return (
    <div>
      { 
        username 
        ? (
          <Fragment>
            <LogIn username={username} />
            <Books books={books} />
          </Fragment>
        )
        : (
          <div children={'Not logged in'} />
        )
      }
    </div> 
  );   
};

const data = {
  username: 'username',
  books: [
    { author: 'author_0', title: 'title_0', year: 'year_0' },
    { author: 'author_1', title: 'title_1', year: 'year_1' }
  ]
};

ReactDOM.render(
  <Collection data={data} />,
  document.getElementById('root')
);
