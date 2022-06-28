import React from 'react';
import LayoutMain from '../layouts/LayoutMain'

function Link(props) {
    return (
        <>
            <h1> Link page</h1>
            <p>Guest: {props.visitor}</p>
        </>
    );
}

Link.layout = page => <LayoutMain children={page} title="Link" />
export default Link;