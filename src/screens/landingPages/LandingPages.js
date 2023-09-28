import React from 'react'
import './LandingPages.css'
import Banner from '../banner/Banner'
import AboutMe from '../aboutMe/AboutMe'
import Benefits from '../benefits/Benefits'
import MySkills from '../mySkills/MySkills'
import MyProjects from '../myProjects/MyProjects'
import SongButton from '../../components/songButton/SongButton'
function LandingPages()  {
  return (
    <div className='landingPages'>
   
    <Banner />
    
       <AboutMe id="aboutMe"/>

 
      <Benefits id="benefits"/> 
   <MySkills/>  
    <MyProjects  id="myProjects"/>
    <SongButton/>
    </div>
 )
}

 
export default LandingPages