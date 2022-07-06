import React from 'react';
import LayoutMain from '../layouts/LayoutMain'
import { Inertia } from '@inertiajs/inertia'
import { ReactComponent } from '@inertiajs/inertia-react';

interface Props {

    bookData: {
        id: number;
        title: string;
        author: string;
        summary: string;
        year: string;
        picture_id: string;
        is_hold: number;
    }
}

declare function route(name: string, args?: { bookId: number }): string;

const SingleBook = ({ bookData }: Props) => {

    const handleHold = () => {
        Inertia.post(route('book.hold', { bookId: bookData.id }))
    }

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
                            {bookData.is_hold === 0 ?
                                (<button className="btn btn-secondary" onClick={handleHold}>Place hold</button>) :
                                (<button className="btn btn-danger" disabled>Not available</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

SingleBook.layout = (page: ReactComponent) => <LayoutMain children={page} title="Home" />

export default SingleBook;