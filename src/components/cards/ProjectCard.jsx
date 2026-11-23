import styled from "styled-components";
import { Tilt } from "react-tilt";
import { trackEvent } from "../../utils/analytics";

const Card = styled.button`
  width: min(330px, calc(100vw - 48px));
  border: 0;
  font: inherit;
  text-align: left;
  min-height: 490px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.3) 0 4px 24px;
  overflow: hidden;
  padding: 26px 20px;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  flex: none;
  width: 100%;
  height: 180px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;
const Details = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Date = styled.span`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
const Members = styled.span`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;
const ProjectCard = ({ project, setOpenModal }) => {
  const openDetails = () => {
    setOpenModal({ state: true, project });
    trackEvent("select_content", {
      content_type: project.sector ? "freelance_project" : "project",
      content_id: project.title,
    });
  };

  return (
    <Tilt style={{ display: "flex", alignSelf: "stretch" }}>
      <Card
        type="button"
        aria-label={`Explore details for ${project.title}`}
        aria-haspopup="dialog"
        onClick={openDetails}
      >
        <Image src={project.image} alt="" />
        {!project.sector && (
          <Tags>
            {project.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </Tags>
        )}
        <Details>
          <Title>{project.title}</Title>
          <Date>{project.sector || project.date}</Date>
          <Description>{project.description}</Description>
        </Details>
        {project.member && (
          <Members>
            {project.member.map((member) => (
              <Avatar key={member.name} src={member.img} alt={member.name} />
            ))}
          </Members>
        )}
        <span style={{ marginTop: "auto", letterSpacing: "2px", textAlign: "center" }}>Explore the Details</span>
      </Card>
    </Tilt>
  );
};

export default ProjectCard;
