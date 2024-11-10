import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="header1">
        <p className="h-p-1"> AboutUs</p>
        <p className="h-p-2">Legal</p>
        <p className="h-p-2">Delivery</p>
        <p className="h-p-2">Support</p>
        <Image src="/assets/marketplace.png" alt="img" height={15} width={15} className="h-img" />
        <p className="h-p-3"> $465.00 <span style={{ color: 'rgb(194, 189, 189)' }}>4 Items</span></p>
        <p className="h-p-2">Login</p>
        <p className="h-p-2">Register</p>
    </header>
  )
}

export default Header
