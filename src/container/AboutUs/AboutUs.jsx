import React from 'react'
import './AboutUs.css'
import G from '../../assets/G.png';
import spoon from '../../assets/spoon.svg';
import knife from '../../assets/knife.png';


function AboutUs() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={G} alt="g letter" />
      </div>

      <div className='app__aboutus-content flex__center'>
        
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={spoon} alt="about_spoon" className='spoong__img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={knife} alt="about_knife" />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={spoon} alt="about_spoon" className='spoong__img'/>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs