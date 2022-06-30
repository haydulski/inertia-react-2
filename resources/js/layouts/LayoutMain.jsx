import React, { useState, useEffect } from 'react'
import { Head } from '@inertiajs/inertia-react'
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { usePage } from '@inertiajs/inertia-react'

export default function Layout({ children, title }) {

  const { pageName, cats, flash } = usePage().props

  const notify = () => toast.error(flash.error, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });

  useEffect(() => {
    if (flash.error != null) notify()

  }, [])

  return (
    <>

      <div className='main'>
        <Head title={title} />
        <Navbar pageName={pageName} cats={cats} />

        <div className='container-xxl mt-5'>{children}</div>
      </div>
      <ToastContainer theme="dark" />
    </>
  )
}