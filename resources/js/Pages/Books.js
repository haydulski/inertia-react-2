import React from 'react';
import LayoutMain from '../layouts/LayoutMain'
import Book from '../components/Book'

function Books(props) {
    return (
        <>
            <div className="row my-5">
                <h1>Our books</h1>
            </div>
            <div className="row mt-5 mb-2">
                <h2>Newest:</h2>
                <Book title='Tytuł' desc='opis książki' id='12' />
                <Book title='Tytuł' desc='opis książki' id='12' />
                <Book title='Tytuł' desc='opis książki' id='12' />
                <Book title='Tytuł' desc='opis książki' id='12' />
            </div>
            <div className="row mt-5 mb-1">
                <h2>Browse by category:</h2>
            </div>
            <div className="row mt-1 mb-2">
                <div className='col-12'>
                    <div className="btn-group" role="group" aria-label="book categories">
                        <button type="button" className="btn btn-primary">Action and Adventure</button>
                        <button type="button" className="btn btn-primary ms-1">Classics</button>
                        <button type="button" className="btn btn-primary ms-1">Comic</button>
                        <button type="button" className="btn btn-primary ms-1">Detective and Mystery</button>
                        <button type="button" className="btn btn-primary ms-1">Fantasy</button>
                        <button type="button" className="btn btn-primary ms-1">Historical</button>
                        <button type="button" className="btn btn-primary ms-1">Horror</button>
                        <button type="button" className="btn btn-primary ms-1">Literary Fiction</button>
                    </div>
                </div>
            </div>
        </>
    );
}

Books.layout = page => <LayoutMain children={page} title="Books" />
export default Books;