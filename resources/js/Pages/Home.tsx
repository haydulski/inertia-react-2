import { ReactComponent } from '@inertiajs/inertia-react';
import React from 'react';
import LayoutMain from '../layouts/LayoutMain'


const Home = () => {
    return (
        <div className="row page__main" >
            <div className="col-12  d-flex flex-column justify-content-center align-items-center ">
                <h1>Library</h1>
                <h2>books for you (Inertia.js with Laravel)</h2>
            </div>
        </div>
    );
}

Home.layout = (page: ReactComponent) => <LayoutMain children={page} title="Home" />
export default Home;