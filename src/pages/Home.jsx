import React from 'react';
import Hero from './Hero';
import ServicesSec from './ServicesSec';
import AssignmentSection from './AssignmentSection';
import AssignmentQuestion from './AssignmentQuestion';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServicesSec></ServicesSec>
            <AssignmentSection></AssignmentSection>
            <AssignmentQuestion></AssignmentQuestion>
        </div>
    );
};

export default Home;