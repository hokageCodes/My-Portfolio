import React from 'react';

// import img
import Me from '../assets/img/about.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-[450px] w-[400px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Me}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Busayo Ogunde
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              My name is Busayo, <span className='spanned'>a self-taught front-end web developer</span> from Nigeria. I am on the journey to become a full-stack web developer. I love to build fun and scalable stuff on the web which requires paying attention to detail and being ready to learn new things when required. <br /> <br /><span className='spanned'>My goal?</span> I want to become a top-notch full-stack Web Developer and Software Engineer. 
                Also because I like to help people and consider myself knowledgeable in this field, I want to get as many people genuinely interested in this journey, started. <br />
                <br />
                <span className='spanned'>When I'm not programming</span>, I love being in very quiet spaces. Watching Anime. Talking about how awesome Ribena is. Surfing the internet for fast cars. Or Playing video games.
              </p>
            </div>
            <a href='#contact'>
              <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
