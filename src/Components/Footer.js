import React from 'react'
import logo from '../img/logo.svg'
import facebook from '../img/icon-facebook.svg'
import twitter from '../img/icon-twitter.svg'
import pinterest from '../img/icon-pinterest.svg'
import instagram from '../img/icon-instagram.svg'

const Footer = () => {
  return (
	  <>  
		  <section className='container-fluid footer'>
			  <div className='container'>
				  <div className='footer-top'>
					  <div className='footer-logo'>
						  <div>
							  <img src={logo} alt="" />
						  </div>
					   <div className='footer-ul'>						  
							<ul>
								<li>About</li>
								<li>Careers</li>
								<li>Events</li>
								<li>Products</li>
								<li>Support</li>
							</ul>
					  </div>
					  </div>
					  <div className='footer-icons'>
						  <div>							  
							<a href="link"> <img src={facebook} alt="" /> </a>
							<a href="link"> <img src={twitter} alt="" /> </a>
							<a href="link"> <img src={pinterest} alt="" /> </a>
							<a href="link"> <img src={instagram} alt="" /> </a>
						  </div>
					  <div>
						  <p className='pt-3'>© 2021 Loopstudios. All rights reserved.</p>
					  </div>
					  </div>					  
				  </div>				  			
			  </div>  
		  </section>
		  
	 </>
  )
}

export default Footer