import { Link, ReactComponent } from '@inertiajs/inertia-react';
import React from 'react'
import LayoutMain from '../layouts/LayoutMain'

interface Props {
    category: any;
    books: Array<{
        id: number;
        picture_id: number;
        title: string;
        author: string;
        year: string;
    }>;
}
type RC = ReactComponent & { props: { category: string } }

declare function route(name: string, args?: { id: number }): string;

const Categories = (props: Props) => {

    return (
        <>
            <div className="row my-5">
                <h1>{props.category}</h1>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
                {props.books.map((book) => {
                    return (

                        <div className="col p-2" key={book.id}>
                            <img className='w-100' src={`/imgs/${book.picture_id}.jpg`} alt={book.title} />
                            <h3 className='my-2 no-wrap'>{book.title}</h3>
                            <h5>{book.author}</h5>
                            <p>{book.year}</p>
                            <Link href={route('book', { id: book.id })}>
                                <button className='btn btn-secondary'>Details</button>
                            </Link>
                            <hr />
                        </div>

                    )
                })}
            </div>
        </>

    );
}

Categories.layout = (page: RC) => <LayoutMain children={page} title={page.props.category} />

export default Categories;