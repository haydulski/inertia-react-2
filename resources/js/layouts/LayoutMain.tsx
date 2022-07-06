import React, { useState, useEffect } from 'react'
import { Head, ReactComponent } from '@inertiajs/inertia-react'
import { Page } from '@inertiajs/inertia'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import notifyS from '../helpers/NotifySuccess'
import notifyE from '../helpers/NotifyError'
import { usePage } from '@inertiajs/inertia-react'

interface LayoutProps {
  children: ReactComponent;
  title: string;
}

interface Props extends Page<{
  pageName: string;
  cats: Array<{ id: number; category: string; }>;
  flash: { error?: string; success?: string; };
  isLogged?: number;
}> { }


const Layout: React.FC<LayoutProps> = ({ children, title }) => {

  const { pageName, cats, flash, isLogged } = usePage<Props>().props

  useEffect(() => {
    if (flash.error != null) { notifyE(flash.error) }
    else if (flash.success != null) {
      console.log(flash.success);
      notifyS(flash.success)
    }

  }, [flash])

  return (
    <>

      <div className='main'>
        <Head title={title} />
        <Navbar pageName={pageName} cats={cats} isLogged={isLogged} />

        <div className='container-xxl mt-5'>{children}</div>
      </div>
      <ToastContainer theme="dark" />
    </>
  )
}

export default Layout