
import styled from 'styled-components';
export const EX = styled.div`
  position: absolute;
  background-color: red;
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
`