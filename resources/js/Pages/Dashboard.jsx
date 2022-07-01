import React, { useState } from 'react';
import LayoutMain from '../layouts/LayoutMain'
import { Inertia } from '@inertiajs/inertia'


function Dashboard({ user }) {

    const dateTimeStr = new Date(user.created_at).toLocaleDateString()

    const handleGiveBack = (id) => {
        Inertia.delete(route('holder.delete', { bookId: id }),)
    }

    const UserBooks = () => {
        if (user.books.length != 0) {
            return user.books.map(book => {
                const dateHolded = new Date(book.pivot.created_at).toLocaleDateString()
                return (
                    <li className="list-group-item" key={book.id}>
                        <button className='btn btn-info me-3' onClick={() => handleGiveBack(book.id)} style={{ color: 'white' }}>
                            Give back
                        </button>
                        <b>{book.title}</b>
                        <span style={{ position: 'absolute', right: '1rem', }}>
                            holded from {dateHolded}
                        </span>
                    </li>
                )
            })
        }
    }

    return (
        <>
            <div className="row dashboard">
                <div className="col-12">
                    <h1>Account dashboard</h1>
                    <h2>Welcome back {user.name}</h2>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-6">
                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h3 className="card-title">Auccount details</h3>
                            <p className="card-text">Auccount id: {user.id}</p>
                            <p className="card-text">Email: {user.email}</p>
                            <p className="card-text">Active from: {dateTimeStr}</p>
                            <button className="btn btn-secondary">Change your details</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card w-100 m-2">
                        <div className="card-body">
                            <h3 className="card-title">Holded books</h3>
                            <ul className="list-group">
                                <UserBooks />
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = page => <LayoutMain children={page} title='User dashboard' />

export default Dashboard;