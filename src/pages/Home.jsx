import React from 'react';
import Hero from './Hero';
import ServicesSec from './ServicesSec';
import AssignmentSection from './AssignmentSection';
import AssignmentQuestion from './AssignmentQuestion';
import Slider from './Slider';
import SalesPromotion from './SalesPromotion';
import NewsletterSignup from './NewsletterSignup';
import LandingPage from './LandingPage';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
         
            <LandingPage></LandingPage>
            
            <SalesPromotion></SalesPromotion>
            <NewsletterSignup></NewsletterSignup>
            <Hero></Hero>
            <ServicesSec></ServicesSec>
            <AssignmentSection></AssignmentSection>
            <AssignmentQuestion></AssignmentQuestion>
        </div>
    );
};

export default Home;