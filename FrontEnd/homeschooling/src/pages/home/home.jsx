import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  color: #666;
  text-align: center;
  animation: glowAnimation 1.5s ease-in-out infinite alternate;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const Feature = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Adiciona uma transição suave */
  cursor: pointer;

  &:hover {
    transform: translateY(-10px); /* Move o card para cima ao passar o mouse */
  }
`;

const FeatureTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

// Animação para o efeito de brilho
const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #666, 0 0 30px #666, 0 0 40px #666, 0 0 55px #666, 0 0 75px #666;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #007bff, 0 0 70px #007bff, 0 0 80px #007bff, 0 0 100px #007bff, 0 0 150px #007bff;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Infinity School</Title>
      <Subtitle>Unlock Your Potential with Us</Subtitle>
      <FeaturesContainer>
        <Feature>
          <FeatureTitle>Expert Instructors</FeatureTitle>
          <FeatureDescription>
            Our instructors are experts in their fields and passionate about teaching.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Flexible Learning</FeatureTitle>
          <FeatureDescription>
            Learn at your own pace with our flexible online courses.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Hands-on Experience</FeatureTitle>
          <FeatureDescription>
            Gain real-world experience through projects and practical assignments.
          </FeatureDescription>
        </Feature>
      </FeaturesContainer>
    </Container>
  );
};

export default Home;


