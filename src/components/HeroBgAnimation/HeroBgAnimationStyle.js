import styled from 'styled-components';


export const Div = styled.div`
    width:600px;
    height: 500px;
`

export const WhiteParticle = styled.div`
  position: absolute;
  background-color: #fc3a00;
  width: 2px; /* Adjust as needed */
  height: 2px; /* Adjust as needed */
  border-radius: 50%;
  pointer-events: none; /* Prevent interaction with particles */
  animation: moveParticle linear infinite;
  
  @keyframes moveParticle {
    0% {
      transform: translateY(0) translateX(0);
    }
    100% {
      transform: translateY(-100vh) translateX(calc(100vw * var(--x)));
    }
  }
`;
export const WhiteParticle1 = styled.div`
  position: absolute;
  background-color: #ffc0cb80;
  width: 2px; /* Adjust as needed */
  height: 2px; /* Adjust as needed */
  border-radius: 50%;
  pointer-events: none; /* Prevent interaction with particles */
  animation: moveParticle1 linear infinite;
  
  @keyframes moveParticle1 {
    0% {
      transform: translateY(-120) translateX(0);
    }
    100% {
      transform: translateY(150vh) translateX(calc(100vw * var(--x)));
    }
  }
`;