import styled from "styled-components";
import Button from "../Button/Button";

const StyledSectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #1e3932;
  align-items: center;
  justify-content: center;
  padding: 10rem;

  @media (max-width: 760px) {
    padding: 1rem;
    margin-right: 2rem;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ImageAbout = styled.img`
  margin-bottom: 10rem;
  height: 70vh;
  border-radius: 20px;
  @media (max-width: 760px) {
    margin: -8rem;
    height: 50vh;
  }
`;

const AboutInfoWrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;
  margin-bottom: 10rem;
  @media (max-width: 760px) {
    padding: 0.5rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SpanAbout = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 30px;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
`;
const TitleAbout = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 4rem;
  line-height: 95px;

  @media (max-width: 760px) {
    font-size: 2.5rem;
    width: 100vw;
    text-align: center;
  }
`;

const TextAbout = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 36px;
  @media (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

export default function About() {
  return (
    <StyledSectionContainer>
      <ImageAbout src="/images/about-img.png" alt="loja starbucks antiga" />

      <AboutInfoWrapper>
        <SpanAbout>preparação</SpanAbout>
        <TitleAbout>Níveis de torra</TitleAbout>
        <TextAbout>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </TextAbout>
        <Button />
      </AboutInfoWrapper>
    </StyledSectionContainer>
  );
}
