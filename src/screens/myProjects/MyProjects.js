import React ,{useEffect ,useState } from 'react'
import './MyProjects.css'
import ScrollingLine from '../../components/scrollingLine/ScrollingLine ';
import image1 from '../../images/image2.png';
import image2 from '../../images/netflix.png';
import image3 from '../../images/image3.png';

const data = [
  {
    image: image1,
    title: 'Blog Website',
    description: " is a dynamic and user-friendly platform for reading and creating blog posts. It leverages the power of React.js for the front-end, Firebase for the backend, and HTML/CSS for styling and structure. This project aims to provide an engaging and responsive web experience for both writers and readers.",
    url: 'https://blogproject-a042e.web.app/',
    tech: ['React.js', 'Firebase',"HTML","CSS"]
  },
  {
    image: image2,
    title: 'Netflix Clone',
    description: 'The Netflix Clone project is a testament to my passion for web development and my ability to replicate complex platforms using modern technologies. I embarked on this project to not only hone my skills but also to showcase my proficiency in building dynamic, feature-rich web applications.',
    url: 'https://netflix22-46732.web.app/',
    tech: ['React.js', 'Firebase', 'Node' ]
  },
  
  {
    title: 'Spam/ham Classifcation Using Machine learning',
    description:
      'Spam.ham classification, here we have taken our training dataset from aggle. Tahe dataset contains 5500+ text messages sample categorized under the catgoery of span/ham depends on the content of the message',
    url: '',
    tech: [ 'Naive Bayes',"TF-IDF"]
  }
];

function MyProjects() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000);
  
      return () => clearInterval(timer); // Cleanup the timer on component unmount
  
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', () => {
          document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
        }, false);
      }, []);
    
    

  return (
    <div className='myProjects'>
   <div className='myProjects-head'>
     <h1>My Projects</h1>
   </div>
    <div className='myProjects-container'>
 
      <div className="myProjects-imagesContainers">
      {data.map((item, index) => (
        <div
          key={index}
          className={`image-text-container ${
            index % 2 === 0 ? 'even' : 'odd'
          }`}
        >
          <div className="myProjects-imagesContainers-image"> 
          {index === currentImageIndex && (
                <div className="bouncing-ball"></div>
              )}      <a href={item.url} target="_blank" rel="noopener noreferrer">
{
     item.image ?    (  <img width={100} src={item.image} alt={`Product ${index + 1}`} />)
  : (<span></span>)}
            </a>
          </div>
          <div className="myProjects-imagesContainers-product-info">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="myProjects-imagesContainers-product-title">
        {item.title}
      </a>
            <div className="myProjects-description">{item.description}</div>
            <div className="tech-list">
        {item.tech.map((tech, techIndex) => (
          <div key={techIndex} className="tech-item">
            {tech}
          </div>
        ))}
      </div>
          </div>
        </div>
      ))}
    </div>
    </div>     
  </div>
  )
}

export default MyProjects