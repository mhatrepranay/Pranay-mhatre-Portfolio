import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../../data/constants';

const fadeInLeft = keyframes`
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const fadeInRight = keyframes`
  0% { opacity: 0; transform: translateX(50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const AchievementsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

const AchievementCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border: 1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  opacity: 0;
  animation: ${({ inView, index }) =>
    inView ? (index % 2 === 0 ? fadeInLeft : fadeInRight) : ''}
    0.6s ease both;
  animation-fill-mode: forwards;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const AchievementImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const AchievementTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`;

const AchievementDate = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const AchievementDescription = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

// Child Component to Handle Individual Achievements
const AchievementCard = ({ achievement, index, rotateX, rotateY, handleMouseMove, handleMouseLeave }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <AchievementCardWrapper
      ref={ref}
      inView={inView}
      index={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      rotateX={rotateX}
      rotateY={rotateY}
    >
      <AchievementImage src={achievement.image} alt={achievement.title} />
      <AchievementTitle>{achievement.title}</AchievementTitle>
      <AchievementDate>{achievement.date}</AchievementDate>
      <AchievementDescription>{achievement.description}</AchievementDescription>
    </AchievementCardWrapper>
  );
};

const Achievements = () => {
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

    const rotateX = ((centerY - offsetY) / centerY) * maxRotation;
    const rotateY = ((offsetX - centerX) / centerX) * maxRotation;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <AchievementsContainer>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
              rotateX={rotateX}
              rotateY={rotateY}
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </AchievementsContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
