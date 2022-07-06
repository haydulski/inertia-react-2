import { random } from 'lodash';
import React from 'react';
import { Link } from '@inertiajs/inertia-react'

interface BookProps {
    title: string;
    desc: string;
    id: string;
    photo: string;
}

declare function route(name: string, args?: { id: string }): string;

const Book = ({ title, desc, id, photo }: BookProps) => {
    let imgId = random(1, 4);
    return (
        <>
            <div className='col-lg-3 p-2' id={id}>
                <img className='w-100' src={`./imgs/${photo}.jpg`} alt='book' />
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link href={route('book', { id: id })}>
                    <button className="btn btn-secondary my-2">
                        More
                    </button>
                </Link>
            </div>
        </>
    );
}

export default React.memo(Book);