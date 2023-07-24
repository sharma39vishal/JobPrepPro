import React from 'react'
import SingleAchiever from './SingleAchiver'
import './Achievers.css'

export default function page() {
  return (
    <div className='achievers-main'>
      <div className="achievers-section-1-container">
        <SingleAchiever achiever_image={'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'}
        achiever_name={'Priyanka Sharma'} achiver_designation={'Project Lead, XtrimCoder'}
        achiever_story={'The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas.The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on Earth.There would be no plants, no animals and no human beings. As, all the living things on Earth get their energy from the Sun for their survival.....'}
        connect={'https://www.instagram.com/taaarannn/'} readmore_button={'Read More'} />
        
        <SingleAchiever achiever_image={'https://images.pexels.com/photos/17117578/pexels-photo-17117578/free-photo-of-profile-of-a-young-woman-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600'}
        achiever_name={'Priyanka Sharma'} achiver_designation={'Project Lead, XtrimCoder'} 
        achiever_story={'The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas.'}
        connect={'https://www.instagram.com/taaarannn/'} />
        
        <SingleAchiever achiever_image={'https://images.pexels.com/photos/4919373/pexels-photo-4919373.jpeg?auto=compress&cs=tinysrgb&w=600'}
        achiever_name={'Priyanka Sharma'} achiver_designation={'Project Lead, XtrimCoder'}
        achiever_story={'The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas.'}
        connect={'https://www.instagram.com/taaarannn/'} />
      </div>
    </div>
  )
}
