import React from 'react';
import styled from 'styled-components';

function Viewers(props) {
    return (
      <Container>
        <Wrap>
          <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-starwars.png" />
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" />
        </Wrap>
      </Container>
    );
}

export default Viewers;

const Container = styled.div`
    margin-top:30px;
    padding:30px 0 25px;
    display:grid;
    grid-template-columns : repeat(5, minmax(0,1fr));
    grid-gap:25px;

`

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms linear 0s;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgb(249, 249, 249, 0.8);
  }
`;