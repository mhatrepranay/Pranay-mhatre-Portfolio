import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import {
    HeroContainer,
    HeroBg,
    HeroLeftContainer,
    Img,
    HeroRightContainer,
    HeroInnerContainer,
    TextLoop,
    Title,
    Span,
    SubTitle,
    ResumeButton
} from './HeroStyle'; // Make sure this file has your styled components
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import "./hero.css";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title className='main'>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle className='desc'>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src='/images/HeroImage1.jpg' alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
};

export default HeroSection;
