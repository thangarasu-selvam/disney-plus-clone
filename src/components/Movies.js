import React from 'react';
import styled from 'styled-components';

function Movies(props) {
    return (
      <Container>
        <h4>Recommended for u</h4>
        <Content>
          <Wrap>
            <img src="https://wallpaperaccess.com/full/1923020.jpg" />
          </Wrap>
          <Wrap>
            <img src="https://wallpaperaccess.com/full/1923020.jpg" />
          </Wrap>
          <Wrap>
            <img src="https://wallpaperaccess.com/full/1923020.jpg" />
          </Wrap>
          <Wrap>
            <img src="https://wallpaperaccess.com/full/1923020.jpg" />
          </Wrap>
        </Content>
      </Container>
    );
}

export default Movies;

const Container = styled.div`
    
`;
const Content = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap: 20px;
`;
const Wrap = styled.div`
  border: 1px solid rgba(249, 249, 249, 0.1);
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