import React from 'react';
import LayoutMain from '../layouts/LayoutMain'

function SingleBook({ bookData }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>{bookData.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <img src={`/imgs/${bookData.picture_id}.jpg`} alt="book cover picture" className="p-2 w-100" />
                </div>
                <div className="col-lg-6">
                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h5 className="card-title">Author: {bookData.author}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Release date: {bookData.year}</h6>
                            <p className="card-text">{bookData.summary}</p>
                            <button className="btn btn-secondary">Place hold</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

SingleBook.layout = (page) => <LayoutMain children={page} title="Home" />

export default SingleBook;