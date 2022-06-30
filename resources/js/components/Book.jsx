import { random } from 'lodash';
import React from 'react';
import { Link } from '@inertiajs/inertia-react'


function Book({ title, desc, id, photo }) {
    let imgId = random(1, 4);
    return (
        <>
            <div className='col-lg-3 p-2' id={id}>
                <img className='w-100' src={`./imgs/${photo}.jpg`} alt='book' />
                <h3>{title}</h3>
                <p>{desc}</p>
                <button className="btn btn-secondary my-2">
                    <Link href={route('book', { id: id })}>More</Link>
                </button>
            </div>
        </>
    );
}

export default React.memo(Book);