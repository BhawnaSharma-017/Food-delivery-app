import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam iusto quasi sapiente, doloremque rem architecto ea consectetur nostrum rerum dolores provident molestiae animi facilis aspernatur quisquam. Magnam eos id ea dolore eveniet quisquam, delectus sapiente harum excepturi, nemo voluptatem ipsa voluptate repudiandae cumque esse corporis veniam suscipit. Eaque, velit.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-213-423-4456</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2026 &copy; Tomato.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer
