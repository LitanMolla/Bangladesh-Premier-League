import flogo from '../../assets/logo-footer.png'
import fbg from '../../assets/bg-shadow.png'
import Container from '../Container/Container'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#06091A] mt-50'>
                <Container>
                    <div className="">
                        <div className="relative -top-35 bg-gray-500/30 p-3 rounded-xl border border-gray-300">
                            <div style={{backgroundImage:`url(${fbg})`}} className="py-20 bg-cover bg-gray-200 rounded-xl text-center space-y-3 p-5">
                                <h4 className='text-3xl font-bold'>Subscribe to our Newsletter</h4>
                                <p className='text-black/70'>Get the latest updates and news right in your inbox!</p>
                                <div className="max-w-xl mx-auto">
                                    <div className="flex gap-2 flex-col sm:flex-row">
                                        <input type="text" placeholder='Enter your email' className='border border-gray-300 px-4 py-2 flex-1 rounded-md outline-0' />
                                        <button className='px-4 py-2 cursor-pointer rounded-md bg-gradient-to-r from-pink-400 via-orange-300 to-orange-400 font-bold'>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <img src={flogo} alt="Logo" className='mx-auto mb-10' />
                            <div className="flex justify-between flex-col md:flex-row gap-5">
                                <div className="flex-1">
                                    <h4 className='text-lg text-gray-100 font-semibold mb-2'>About Us</h4>
                                    <p className='text-gray-100/60'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                                </div>
                                <div className="flex-1">
                                    <h4 className='text-lg text-gray-100 font-semibold mb-2'>Quick Links</h4>
                                    <ul className='text-gray-100/60 cursor-pointer list-disc ml-5'>
                                        <li>Home</li>
                                        <li>Services</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                                <div className="flex-1">
                                    <h4 className='text-lg text-gray-100 font-semibold mb-2'>Subscribe</h4>
                                    <p className='text-gray-100/60'>Subscribe to our newsletter for the <br /> latest updates.</p>
                                    <div className="flex mt-2">
                                        <input type="text" placeholder='Enter your email' className='border border-gray-300 px-4 py-2 flex-1 rounded-l-md outline-0 bg-gray-100' />
                                        <button className='px-4 py-2 cursor-pointer rounded-r-md bg-gradient-to-r from-pink-400 via-orange-300 to-orange-400 font-bold'>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='text-gray-100/20 mt-10' />
                        <p className='py-8 text-center text-gray-100/60'>@2025 BPL All Rights Reserved.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer