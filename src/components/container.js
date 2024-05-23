import styled from "styled-components";

export const DefaultContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: relative;
  flex-direction: column;
  padding: 0 15px;
`;

export const Container = styled(DefaultContainer)`
  @media (min-width: ${props => props.theme.mobileS}) {
    max-width:320px;
  }

  @media (min-width: ${props => props.theme.mobileM}) {
    max-width:355px;
  }

  @media (min-width: ${props => props.theme.mobileL}) {
    max-width:405px;
  }

  @media (min-width: ${props => props.theme.mobileXL}) {
    max-width:520px;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    max-width:720px
  }

  @media (min-width: ${props => props.theme.medium}) {
    max-width:960px;
  }

  @media (min-width: ${props => props.theme.large}) {
    max-width:1140px;
  }

  @media (min-width: ${props => props.theme.xLarge}) {
    max-width:1350px;
  }
`;
