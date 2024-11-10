import Image from 'next/image'
import React from 'react'

const Header2 = () => {
  return (
    <header className="header2">
    <Image src="/assets/SPORTSHOLD_logo.png" alt="img" height={20} width={150} className="header2-img" />
    <a href="#" className="header2-a">Home</a>
    <a href="#" className="header2-a-2">Men</a>
    <a href="#" className="header2-a-2">Women</a>
    <a href="#" className="header2-a-2">Children</a>
    <a href="#" className="header2-a-2">Baby</a>
    <a href="#" className="header2-a-2">Our Brands</a>
    <a href="#" className="header2-a-2">Sales</a>
</header>
  )
}

export default Header2
