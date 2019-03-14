import styled from '@emotion/styled';

const Jumbotron = styled.header`
  text-align: center;
  padding: 30px 0;

  h1 {
    font-size: 28px;
    font-weight: normal;
    letter-spacing: 0.125em;
    margin: 24px 0 16px;
    @media screen and (min-width: 425px) {
      font-size: 40px;
    }
  }

  h2 {
    margin: 0;
    font-size: 14px;
    letter-spacing: 0.5em;
    font-weight: 200;
  }
`;

export default Jumbotron;
