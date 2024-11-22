import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #037143;
  color: #ffffff;
  width: 15rem;
  height: 4rem;
  border-radius: 30px;
  border: none;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
  margin-top: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
export default function Button() {
  return (
    <section>
      <StyledButton>saiba mais</StyledButton>
    </section>
  );
}
