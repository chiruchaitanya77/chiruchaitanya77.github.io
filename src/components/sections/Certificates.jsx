import React from "react";
import styled, { keyframes } from "styled-components";
import { certificates } from "../../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 60px 30px 0 30px;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    overflow: hidden;
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const scrollAnimation = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-50% - 20px));
    }
`;

const Scroller = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-block: 15px;
    position: relative;
    -webkit-mask: linear-gradient(90deg, transparent, black 30%, white 70%, transparent);
    mask: linear-gradient(90deg, transparent, black 30%, white 70%, transparent);
    @media (max-width: 640px) {
        -webkit-mask: linear-gradient(90deg, transparent, black 10%, white 90%, transparent);
        mask: linear-gradient(90deg, transparent, black 10%, white 90%, transparent);
    }
`;

const CertificateContainer = styled.div`
    display: flex;
    gap: 40px;
    width: max-content;
    align-items: center;
    animation: ${scrollAnimation} 50s linear infinite;
    &:hover {
        animation-play-state: paused;
    }
    @media (max-width: 640px) {
        animation: ${scrollAnimation} 50s linear infinite;
    }
`;

const CertificateCard = styled.div`
    min-width: 300px;
    margin: 0 10px;
    height: 420px;
    perspective: 1000px;
    cursor: pointer;
`;

const CardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    
    ${CertificateCard}:hover & {
        transform: rotateY(180deg);
    }
`;

const CardFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    //box-shadow: rgba(23, 92, 230, 0.3) 0 4px 24px;
    //background-color: rgba(17, 25, 40, 0.83);
    padding: 10px;
`;

const CardFront = styled(CardFace)``;

const CardBack = styled(CardFace)`
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(23, 92, 230, 0.3) 0 4px 24px;
    background-color: rgba(17, 25, 40, 0.83);
`;

const CertificateImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
`;

const CertificateTitle = styled.p`
    font-weight: 600;
    color: #f0f0f0;
    font-size: 1.2rem;
    padding: 20px;
`;

const Certificates = () => {
    // Duplicate certificates to enable infinite looping
    const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

    return (
        <Container id="Certificates">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc>Here are some of my Certificates</Desc>
                <Scroller>
                    <CertificateContainer>
                        {duplicatedCertificates.map((cert, index) => (
                            <CertificateCard key={index}>
                                <CardInner>
                                    <CardFront>
                                        <CertificateImage src={cert.image} alt={cert.title} />
                                    </CardFront>
                                    <CardBack>
                                        <CertificateTitle>{cert.title}</CertificateTitle>
                                    </CardBack>
                                </CardInner>
                            </CertificateCard>
                        ))}
                    </CertificateContainer>
                </Scroller>
            </Wrapper>
        </Container>
    );
};

export default Certificates;
