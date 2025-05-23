import React from 'react'
import logo from '../../Assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebook,  FaInstagram, FaPhoneAlt,  } from 'react-icons/fa'
import {  IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'




const Footer = () => {

  const CustomLink = ({to , title , className=""}) => {
    const location = useLocation();
  
    return(
      <Link to={to} className={`${className} relative end-0 group hover:text-green-500 ${location.pathname === to ? 'border-b-2 border-blue-500' : ''} `}>
        {title}
        
      </Link>
    )
  }

  // let currentYear = new Date().getFullYear();

  return <>

    <footer className=' shadow-lg overflow-x-hidden '>
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          <div className="col-md-2">
            <img className='w-50  m-auto' src={logo} alt="" />
          </div>

          <div className="col-md-7 py-8 text-center">
            <CustomLink to='/'  title="الرئيسية"  className='mr-3 text-decoration-none text-bold text-lg text-[#445F2D]'/>
            <CustomLink to="/products" title="المنتجات" className='mx-3 text-decoration-none text-bold text-lg text-[#445F2D]'/>
            <CustomLink to="/about" title="عن الشركة" className='mx-2 text-decoration-none text-bold text-lg text-[#445F2D]'/>
            <CustomLink to="/contactUs" title="تواصل معنا" className='mx-3 text-decoration-none text-bold text-lg text-[#445F2D]'/>
          </div>
          <div className="col-md-3 ">
            <div className="social mb-3 text-center flex justify-center align-middle">
              <a className='text-2xl mx-3   ' href="https://www.facebook.com/icpchti" target='blank'><FaFacebook />              </a>
              <a className='text-2xl mx-3  text-green-600 ' href="https://www.linkedin.com/company/icpc-hti" target='blank'><IoLogoWhatsapp />              </a>
              <a className='text-2xl mx-3  text-red-500 ' href="https://www.facebook.com/icpchti" target='blank'><FaInstagram />             </a>
            </div>
          </div>
        </div>


        <div className="row text-center m-auto py-4 border-t justify-content-center align-items-center">

          <div className="col-md-3 col-sm-5">
          <div className="location mt-2 flex justify-center align-middle">
          <FaLocationDot className='text-red-500  me-0 text-xl sm:text-2xl'/>
            <span >مول ديزرت روز - النوبارية الجديدة، محافظة البحيرة</span>
          </div>
          </div>
          
          <div className="col-md-3 col-sm-5">
          <div className="email mt-2 flex justify-center align-middle">
          <MdEmail className='text-blue-500  me-1 text-lg'/>
            <span>7asad.argric.tech@gmail.com</span>
          </div>
          </div>

          <div className="col-md-3 col-sm-5">
          <div className="phone mt-2 flex justify-center align-middle">
          <FaPhoneAlt className='  me-1 text-lg'/>
            <span> 045 263 8818 - 01554651229   </span>
          </div>
          </div>
          
          
        </div>
      </div>
    </footer>

     

  </>
}

export default Footer