import React from 'react';
import { IntroSlider } from "../components/UI/IntroSlider.tsx";
import AboutSection from '../components/UI/AboutSection.tsx';
import Testimonial from '../components/UI/Testimonial.tsx';
import "../styles/home.css";
import Example from '../components/UI/Example.tsx';


const Home = () => {

  return (
    <div className='home-section'>
      <Example/>
     
      {/* <IntroSlider/> */}
   
      <AboutSection aboutClass="aboutPage"/> 
      <Testimonial/>

    </div>
  );
};

export default Home;
