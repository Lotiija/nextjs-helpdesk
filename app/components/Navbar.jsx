import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from './logo2.png'

const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>Lotiija Helpdesk</h1>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}

export default Navbar;