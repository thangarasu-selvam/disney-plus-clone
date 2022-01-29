import React from 'react';
import styled from 'styled-components';
function Detail(props) {
    return (
      <Container>
        <Background>
          <img src="https://wallpaperaccess.com/full/1923020.jpg" />
        </Background>
        <ImageText>
          <img src="/images/viewers-marvel.png" />
        </ImageText>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>play</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupMatchButton>
            <img src="/images/group-icon.png" />
          </GroupMatchButton>
        </Controls>
        <Subtitle>7m . 2018 - family childeren animation</Subtitle>
        <Descrption>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Descrption>
      </Container>
    );
}

export default Detail;

const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity:0.8;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const ImageText = styled.div`
  height: 30vh;
  width: 35vw;
  min-height:170px;
  min-width:200px;

  img { 
    height:100%;
    width:100%;
    object-fit:contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items:center;
`;
const PlayButton = styled.button`
  display:flex;
  align-items:center;
  border:none;
  margin-right:25px;
  padding:0 20px;
  height:56px;
  letter-spacing:1.8px;
  background:rgb(249,249,249);
  cursor:pointer;
  text-transform:uppercase;
  &:hover {
      background:rgb(198,198,198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgb(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color:rgb(249,249,249);
`;
const AddButton = styled.button`
  width:40px;
  height:40px;
  border-radius:50%;
  border:1px solid white;
  background: rgb(0,0,0,0.3);
  color:white;
  margin-right: 25px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;

  span {
      font-size:30px;
  }
`;
const GroupMatchButton = styled(AddButton)`
  background: rgb(0,0,0);
`;
const Subtitle = styled.div`
  margin-top:25px;
  font-size:15px;
  min-height:20px;
  color:rgb(249,249,249);
`;
const Descrption = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;  