import React from 'react'
import { images } from '../images';
import { imagesMobile} from '../images-mobile';

const Creations = () => {
  return (
	  <>
		  <section className='container-fluid'>
			  <div className='container creation'>
				  <div className='creation-text d-flex  justify-content-between'>
					  <h1>Our creations</h1>
					  <p> See all</p>
				  </div>

					<div className='row row-webView'>					  
						{images.map((item) => {
							const { img, title} = item;
							return <div className='col-lg-3 col-md-6 col-sm-12'> <img src={img} alt="" className='relative-img' />
								<p id='relative-img-text'>{title}</p>
							</div>
						})}
				  </div>
				  
				  {/* mobile view */}

				  <div className='row row-mobile-view'>					  
						{imagesMobile.map((items) => {
							const { image, title} = items;
							return <div className='col-lg-3 col-md-6 col-view px-0'> <img src={image} alt="" className='relative-img' />
								<p id='relative-img-text'>{title}</p>
							</div>
						})}
					</div>
			  </div>
		</section>
	  </>
  )
}

export default Creations