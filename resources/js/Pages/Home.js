import React from 'react';
import LayoutMain from '../layouts/LayoutMain'



function Home(props) {
    return (


        <div className="row page__main" >
            <div className="col-12  d-flex flex-column justify-content-center align-items-center ">
                <h1>Library</h1>
                <h2>books for you</h2>
            </div>
        </div>

    );
}

Home.layout = page => <LayoutMain children={page} title="Home" />
export default Home;