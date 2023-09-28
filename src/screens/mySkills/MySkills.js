import React ,{useEffect} from 'react'
import './MySkills.css'
import html from '../../images/HTML.png';

import react from '../../images/react.webp';
import node from '../../images/node.webp';
import scss from '../../images/scss.png';
import js from '../../images/js.png';
import firebase from '../../images/fb.png';
import md from '../../images/mdb2.png';

const skillsData = [
  {
    id: 1,
    imageSrc: html, // Replace with actual image source
    text: 'HTML',
  },
  {
    id: 2,
    imageSrc: react, // Replace with actual image source
    text: 'React JS',
  },
  {
    id: 3,
    imageSrc: node, // Replace with actual image source
    text: 'Node JS',
  },
  {
    id: 4,
    imageSrc: scss, // Replace with actual image source
    text: 'Scss',
  },
  {
    id: 5,
    imageSrc: js, // Replace with actual image source
    text: 'JavaScript',
  },
  {
    id: 6,
    imageSrc: firebase, // Replace with actual image source
    text: 'Firebase',
  },
  {
    id: 7,
    imageSrc: md, // Replace with actual image source
    text: 'Mongo DB',
  },

];
function MySkills( ) {



 

  return (
    <div className='mySkill'>
      <div className='mySkill-container'>
        
     
      <div className='mySkill-head'>
        <h1>My Skills</h1>
      </div>
      <div className='mySkill-main'>
      {skillsData.map(skill => (
            <div className='skill-box' key={skill.id}>
              <img src={skill.imageSrc} alt={`Skill ${skill.id}`} />
              <p>{skill.text}</p>
            </div>
          ))}
      </div>
       </div>
    </div>
  )
}

export default MySkills