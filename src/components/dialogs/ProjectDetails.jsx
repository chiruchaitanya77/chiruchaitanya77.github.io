import { CloseRounded } from "@mui/icons-material";
import { IconButton, Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SocialIcon from "../SocialIcon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: flex-start;
  padding: clamp(8px, 3vw, 32px);
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  border-radius: 16px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: clamp(16px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.2;
  }

  p {
    margin-top: 6px;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const Overview = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 16px;

  > div {
    flex: 1;
    min-width: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Desc = styled.p`
  line-height: 1.65;
  margin: 0 6px 12px;
`;

const Image = styled.img`
  width: 48%;
  height: auto;
  max-height: 320px;
  object-fit: contain;
  border-radius: 10px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Highlights = styled.ul`
  margin: 4px 6px 12px;
  padding-left: 22px;
  line-height: 1.55;

  li + li {
    margin-top: 8px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
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
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
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
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal.project;
  const close = () => setOpenModal({ state: false, project: null });
  return (
    <Modal
      open={true}
      onClose={close}
    >
      <Container>
        <Wrapper role="dialog" aria-modal="true" aria-labelledby="project-title">
          <Header>
            <div>
              <h2 id="project-title">{project.title}</h2>
              <p>{project.sector || project.date}</p>
            </div>
            <IconButton aria-label="Close project details" onClick={close} sx={{ color: "inherit" }}>
              <CloseRounded />
            </IconButton>
          </Header>
          <Overview>
            <Image src={project.image} alt="" onError={(event) => { event.currentTarget.hidden = true; }} />
            <div>
              <Desc>{project.description}</Desc>
              <Tags aria-label="Technologies">
                {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
              </Tags>
            </div>
          </Overview>
          {project.implementation && (
            <>
              <Label as="h3">How it works</Label>
              <Desc>{project.implementation}</Desc>
            </>
          )}
          {project.highlights && (
            <>
              <Label as="h3">Project highlights</Label>
              <Highlights>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </Highlights>
            </>
          )}
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      aria-label={`${member.name} on GitHub`}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <SocialIcon $platform="GitHub" />
                    </a>
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <SocialIcon $platform="LinkedIn" />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            {project.github && (
              <Button href={project.github} target="_blank" rel="noopener noreferrer">View Code</Button>
            )}
            {project.webapp && (
              <Button href={project.webapp} target="_blank" rel="noopener noreferrer">View Live App</Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
