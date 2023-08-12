import React from 'react'
import Image from 'next/image'
const NavigationBar = () => {
  return (
    <nav className='container'>
       <ul>
        <li><Image src="assets/icons/logo.svg" width={30} height={30} alt="twitter logo" /></li>
        <li> <Image src="assets/icons/home.svg" width={30} height={30} alt="home icon" />Home</li>
        <li><Image src="assets/icons/search.svg" width={30} height={30} alt="home icon" />Explore</li>
        <li><Image src="assets/icons/notification.svg" width={30} height={30} alt="home icon" />Notification</li>
        <li><Image src="assets/icons/message.svg" width={30} height={30} alt="home icon" />Messages</li>
        <li><Image src="assets/icons/profile.svg" width={30} height={30} alt="home icon" />Profile</li>
        <li><Image className='more_icon' src="assets/icons/more.svg" width={30} height={30} alt="home icon" />More</li>
      </ul>
    </nav>
   
  )
}

export default NavigationBar