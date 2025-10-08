import React from 'react'
import HomeHero from '../Components/HomeHero'
import HomeHowItWorks from '../Components/HomeHowitWork'
import HomeAbout from '../Components/HomeAbout'
import HomeIndustries from '../Components/HomeIndustries'
import HomeSkill from '../Components/HomeSkill'
import HomeOffering from '../Components/HomeOffering'
import HomeProject from '../Components/HomeProject'
import HomeSlider from '../Components/HomeSlider'
import HomeTestimonial from '../Components/HomeTestimonial'
import HomeNews from '../Components/HomeNews'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <section>
        <HomeHero/>
      </section>
      <section>
        <HomeHowItWorks/>
      </section>
      <section>
        <HomeAbout/>
      </section>
      <section>
        <HomeIndustries/>
      </section>
      <section className='mt-[25%] '>
        <HomeSkill/>
      </section>
      <section>
        <HomeOffering/>
      </section>
      <section>
        <HomeProject/>
      </section>
      <section className='mt-[16%]'>
        <HomeSlider/>
      </section>
      <section>
        <HomeTestimonial/>
      </section>
      <section>
        <HomeNews/>
      </section>
    </div>
  )
}

export default Home
