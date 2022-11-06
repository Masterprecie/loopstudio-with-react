import React from 'react'
import imageInteractive from '../img/image-interactive.jpg'

const Leaders = () => {
  return (
	  <>
		  <section className='container-fluid'>
			  <div className='container leader'>
				<img src={imageInteractive} alt="" />
				  <div className='leader-text'>
					  <h4>
						   The leader in interactive VR 
					  </h4>
					  <p>
						  Founded in 2011, Loopstudios has been producing world-class virtual reality 
							projects for some of the best companies around the globe. Our award-winning 
							creations have transformed businesses through digital experiences that bind 
							to their brand.
					  </p>
				  </div> 
				   <div className='leader-text-mobile'>
					  <h4>
						   The leader in interactive VR 
					  </h4>
					  <p>
						  Founded in 2011, Loopstudios has been producing world-class virtual reality 
							projects for some of the best companies around the globe. Our award-winning 
							creations have transformed businesses through digital experiences that bind 
							to their brand.
					  </p>
				  </div> 
			  </div>
			  
			</section>
	  </>
  )
}

export default Leaders