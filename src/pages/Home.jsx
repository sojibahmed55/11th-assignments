import React from 'react';
import Hero from './Hero';
import ServicesSec from './ServicesSec';
import AssignmentSection from './AssignmentSection';
import AssignmentQuestion from './AssignmentQuestion';
import Slider from './Slider';
import CardSection from './CardSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <CardSection></CardSection>
            <Hero></Hero>
            <ServicesSec></ServicesSec>
            <AssignmentSection></AssignmentSection>
            <AssignmentQuestion></AssignmentQuestion>
        </div>
    );
};

export default Home;