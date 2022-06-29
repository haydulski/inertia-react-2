import React, { useState, useMemo, useCallback } from 'react'
import LayoutMain from '../layouts/LayoutMain'
import Book from '../components/Book'
import { orderBy } from 'lodash'


function Books(props) {

    const books = props.books
    const cats = props.categories

    const [currentCat, setCat] = useState(cats[0])
    const newest = orderBy(books, (a) => a.year, 'desc').splice(0, 4)

    const sortedByCat = books.filter(cat => cat.category_id === currentCat.id).splice(0, 4)


    const handleCategory = (id) => {
        setCat(cats.find(cat => cat.id === id))
    }

    const newestBooks = useCallback(() => newest.map((n, key) => {
        return (
            <Book title={n.title} desc={n.summary} id={n.id} key={key} photo={n.picture_id} />
        )
    })
        , [books])

    return (
        <>
            <div className="row my-5">
                <h1>Our books</h1>
            </div>
            <div className="row mt-5 mb-2">
                <h2>Newest:</h2>
                {newestBooks()}
            </div>
            <div className="row mt-5 mb-1">
                <h2>Browse by category:</h2>
            </div>
            <div className="row mt-1 mb-2">
                <div className='col-12'>
                    <div className="btn-group" role="group" aria-label="book categories">
                        {cats.length === 0 ? null : cats.map((cc) => {

                            return (
                                <button type="button"
                                    className={cc.id === currentCat.id ? "btn btn-primary me-1 active" : "btn btn-primary me-1"}
                                    key={cc.id}
                                    onClick={() => handleCategory(cc.id)}>
                                    {cc.category}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="row mt-1 mb-2">
                {sortedByCat.length == 0 ? 'loading...' : sortedByCat.map((n, key) => {
                    return (
                        <Book title={n.title} desc={n.summary} id={n.id} key={key} photo={n.picture_id} />
                    )
                })}
            </div>
        </>
    );
}

Books.layout = page => <LayoutMain children={page} title="Books" />
export default Books;