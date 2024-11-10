import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    <section>
    <div className="sec-sneakers-1">
        <Image src="/assets/sneakers.png" alt="img" height={520} width={650} className="sec-sneakers" />
    </div>
    <div className="sec-sneakers-2">
        <p className="sec-sneakers-2-p">From $80.00</p>
        <p className="sec-sneakers-3-p">Nike Air Max</p>
        <p className="sec-sneakers-4-p">50 Variants</p>
        <p className="sec-sneakers-5-p">
            Since this is our favorite sneaker,
            we re bringing you <br />
            50 variants to suit everyone  needs.
        </p>
        <button className="browse-btn">BROWSE VARIANTS</button>
    </div>
</section>
  )
}

export default Section
