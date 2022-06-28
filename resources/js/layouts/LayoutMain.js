import React, { useState, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import Navbar from '../components/Navbar'

export default function Layout({ children, title }) {



  return (
    <div className='main'>
      <Head title={title} />
      <Navbar />

      <div className='container-xxl mt-5'>{children}</div>
    </div>
  )
}