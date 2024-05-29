import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <main className='text-center'>
      <h2 className='text-3xl text-red-600'>There was a problem !</h2>
      <p>We could not find the page you were looking for.</p>
      <p>Go back to the <Link className='text-red-600' href="/">Dashboard</Link></p>
    </main>
  )
}

export default NotFound;