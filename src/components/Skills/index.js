import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/constants';

// Fade in from left
const fadeInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Fade in from right
const fadeInRight = keyframes`
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 50px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  opacity: 0;
  transform: translateX(-50px); // Default position (left)
  animation: ${({ inView, index }) =>
    inView
      ? index % 2 === 0 // Even index: Fade from left
        ? `fadeInLeft ${0.6 + 0.1 * index}s ease-out forwards`
        : `fadeInRight ${0.6 + 0.1 * index}s ease-out forwards` // Odd index: Fade from right
      : ''};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

// SkillCard component
const SkillCard = ({ skill, index, rotateX, rotateY, handleMouseMove, handleMouseLeave }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Skill
      ref={ref}
      inView={inView}
      index={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      rotateX={rotateX}
      rotateY={rotateY}
    >
      <SkillTitle>{skill.title}</SkillTitle>
      <SkillList>
        {skill.skills.map((item, i) => (
          <SkillItem key={i} inView={inView} index={i}>
            <SkillImage src={item.image} />
            {item.name}
          </SkillItem>
        ))}
      </SkillList>
    </Skill>
  );
};

const Skills = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxRotation = 15;

    const rotateX = (centerY - offsetY) / centerY * maxRotation;
    const rotateY = (offsetX - centerX) / centerX * maxRotation;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        {/* <Desc>Here are some of my skills that I have been working on for the past 2 years.</Desc> */}
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill}
              index={index}
              rotateX={rotateX}
              rotateY={rotateY}
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
