'use client'

import React, { useEffect } from 'react'

function AdBanner() {

    useEffect(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.log(error.message)
      }
    }, [])

  return (
    <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6105325142498306"
        data-ad-format="auto"
        data-ad-slot="6105325142498306"
    >


    </ins>
  )
}

export default AdBanner