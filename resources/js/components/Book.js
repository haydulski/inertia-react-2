import { random } from 'lodash';
import React from 'react';


function Book({ title, desc, id }) {
    let imgId = random(1, 4);
    return (
        <>
            <div className='col-lg-3 p-2' id={id}>
                <img className='w-100' src={`./imgs/${imgId}.jpg`} alt='book' />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default React.memo(Book);