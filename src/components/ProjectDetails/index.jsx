import React from 'react';
import styled from 'styled-components';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    margin: 50px 8px; /* Smaller margins on mobile */
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
`;

const SliderContainer = styled.div`
  margin-top: 30px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px; /* Set max height for larger screens */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain; /* Prevent cropping */
  border-radius: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-height: 250px; /* Adjust for smaller screens */
  }

  @media (max-width: 480px) {
    max-height: 200px; /* Further adjustment for mobile */
  }
`;


const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <SliderContainer>
            <Slider {...settings}>
              {project?.images.map((image, index) => (
                <div key={index}>
                  <Image src={image} alt={`Project Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </SliderContainer>
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project.description.map((line, index) => (
            <>

              <p key={index}>{line}</p>
              <br />
            </>
          ))}</Desc>
          {project?.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project.member.map((member) => (
                  <Member key={member.name}>
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <GitHub />
                    </a>
                    <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button href={project?.github} target="new">View Code</Button>
            {project.id == 4 ? (
              <Button href={project?.webapp} target="new">Open Video</Button>

            ) : (

              <Button href={project?.webapp} target="new">View Live App</Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default index;
