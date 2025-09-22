import React from 'react'
import Container from '../Container/Container'
import banner from '../../assets/banner-main.png'
import bg from '../../assets/bg-shadow.png'

const Hero = () => {
  return (
    <>
      <Container>
        <div style={{backgroundImage:`url(${bg})`}} className={` py-30 bg-black bg-cover text-center space-y-3 rounded-xl overflow-hidden mb-5`}>
          <img className='mx-auto' src={banner} alt="Banner" />
          <h2 className='md:text-4xl text-3xl font-bold text-gray-100'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
          <h4 className='md:text-2xl text-xl font-bold text-gray-400'>Beyond Boundaries Beyond Limits</h4>
          <button className='bg-yellow-500 font-bold px-6 py-3 cursor-pointer rounded-xl ring-1 border-5 border-black ring-yellow-500'>Claim Free Credit</button>
        </div>
      </Container>
    </>
  )
}

export default Hero